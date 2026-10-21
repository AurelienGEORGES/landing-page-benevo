import { useEffect, useRef, useState } from 'react'
import { asset } from '../asset'

const isFullscreen = () => document.fullscreenElement || document.webkitFullscreenElement

export default function VideoSection() {
  const playerRef = useRef(null)
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const progressBarRef = useRef(null)
  const restartRef = useRef(null)
  const hideControlsTimeout = useRef(null)

  const [playIcon, setPlayIcon] = useState('ph-fill ph-play')
  const [volumeIcon, setVolumeIcon] = useState('ph-bold ph-speaker-high')
  const [controlsHidden, setControlsHidden] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    const overlay = overlayRef.current
    if (video.paused) {
      video.play()
      setPlayIcon('ph-pause-fill')
      overlay.style.opacity = '0'
      setTimeout(() => { if (!video.paused) overlay.style.visibility = 'hidden' }, 300)
    } else {
      video.pause()
      setPlayIcon('ph-play-fill')
      overlay.style.visibility = 'visible'
      overlay.style.opacity = '1'
    }
  }

  const updateVolumeIcon = () => {
    const video = videoRef.current
    setVolumeIcon(video.muted || video.volume === 0 ? 'ph-speaker-slash-fill' : 'ph-speaker-high-fill')
  }

  const handleVolume = (e) => {
    const video = videoRef.current
    video.volume = e.target.value
    video.muted = Number(e.target.value) === 0
    updateVolumeIcon()
  }

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted
    updateVolumeIcon()
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    progressBarRef.current.style.width = `${(video.currentTime / video.duration) * 100}%`
  }

  const handleProgressClick = (e) => {
    const video = videoRef.current
    video.currentTime = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * video.duration
  }

  const handleFullscreen = () => {
    const player = playerRef.current
    if (!isFullscreen()) {
      // Plein écran sur le conteneur pour garder les contrôles personnalisés
      if (player.requestFullscreen) player.requestFullscreen()
      else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen()
      // Désactive l'overlay central pour ne pas bloquer les clics en bas
      overlayRef.current.style.pointerEvents = 'none'
    } else {
      if (document.exitFullscreen) document.exitFullscreen()
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
      overlayRef.current.style.pointerEvents = 'auto'
    }
  }

  const handleRestart = () => {
    videoRef.current.currentTime = 0
    if (videoRef.current.paused) togglePlay()

    restartRef.current.style.transform = 'rotate(-360deg)'
    setTimeout(() => { restartRef.current.style.transform = 'rotate(0deg)' }, 400)
  }

  // Masquage automatique des contrôles, uniquement en plein écran
  const handleControlsVisibility = () => {
    setControlsHidden(false)
    document.body.style.cursor = 'default'
    clearTimeout(hideControlsTimeout.current)

    if (isFullscreen()) {
      hideControlsTimeout.current = setTimeout(() => {
        if (!videoRef.current.paused) {
          setControlsHidden(true)
          document.body.style.cursor = 'none'
        }
      }, 2000)
    }
  }

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setControlsHidden(false)
        document.body.style.cursor = 'default'
      }
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      clearTimeout(hideControlsTimeout.current)
    }
  }, [])

  return (
    <section id="demo" className="section-video">
      <div className="container video-container-flex">
        <div className="video-text">
          <h2>Voyez la simplicité en action</h2>
          <p>Découvrez comment nous transformons des heures de gestion administrative en quelques clics sereins.
            Nous remettons l'humain au centre, et la technique au placard.</p>
        </div>
        <div className="video-wrapper">
          <div
            className="custom-video-container"
            id="videoPlayer"
            ref={playerRef}
            onMouseMove={handleControlsVisibility}
            onMouseDown={handleControlsVisibility}
          >
            <div className="custom-video-container" id="videoPlayer" role="region" aria-label="Lecteur vidéo Bnevo">
              <video
                id="mainVideo"
                ref={videoRef}
                className="video-element"
                preload="metadata"
                playsInline
                webkit-playsinline="true"
                muted
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
              >
                <source src={asset('LEAN-Publicité 1.mp4')} type="video/mp4" />
              </video>

              <div className="video-overlay" id="videoOverlay" ref={overlayRef} aria-hidden="true" onClick={togglePlay}>
                <div className="play-button-large">▶</div>
              </div>

              <div className={`video-controls${controlsHidden ? ' controls-hidden' : ''}`} role="group" aria-label="Contrôles de lecture">
                <div className="controls-main">

                  <button className="control-btn" id="fullScreenBtn" aria-label="Plein écran" onClick={handleFullscreen}>
                    <i className="ph-bold ph-corners-out"></i>
                  </button>

                  <button className="control-btn" id="playPauseBtn" aria-label="Play/Pause" onClick={togglePlay}>
                    <i className={playIcon}></i>
                  </button>

                  <div className="progress-area" id="progressArea" onClick={handleProgressClick}>
                    <div className="progress-bar-container">
                      <div className="progress-bar" id="progressBar" ref={progressBarRef}></div>
                    </div>
                  </div>

                  <button className="control-btn" id="restartBtn" ref={restartRef} title="Relancer du début" onClick={handleRestart}>
                    <i className="ph-bold ph-arrow-counter-clockwise"></i>
                  </button>

                  <div className="volume-container">
                    <button className="control-btn" id="muteBtn" aria-label="Muter" onClick={handleMute}>
                      <i className={volumeIcon}></i>
                    </button>
                    <input
                      type="range"
                      className="volume-slider"
                      id="volumeSlider"
                      min="0"
                      max="1"
                      step="0.1"
                      defaultValue="1"
                      onInput={handleVolume}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
