import React, { useRef, useState } from 'react';

export default function VideoSection() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = formatTime(videoRef.current.currentTime);
      const dur = formatTime(videoRef.current.duration);
      setCurrentTime(current);
      setDuration(dur);
    }
  };

  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.requestFullscreen?.().catch(() => {});
    }
  };

  return (
    <section id="demo" style={{
      background: '#FFFFFF',
      padding: '80px 20px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Text Content */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: '"Nunito", sans-serif',
              fontWeight: '600',
              color: '#181818',
              marginBottom: '20px'
            }}>
              Voyez la simplicité en action
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '30px'
            }}>
              Découvrez comment nous transformons des heures de gestion administrative en
              quelques clics sereins. Nous remettons l'humain au centre, et la technique au placard.
            </p>
            <button className="btn btn-primary">
              Demander une démo
            </button>
          </div>

          {/* Video Player */}
          <div ref={videoContainerRef} style={{
            position: 'relative',
            background: 'black',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <video
              ref={videoRef}
              src="/assets/LEAN-Publicité 1.mp4"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
            />

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.4)',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onClick={togglePlay}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)'}
              >
                <div style={{
                  fontSize: '60px',
                  color: 'white',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  ▶
                </div>
              </div>
            )}

            {/* Video Controls */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
              padding: '20px',
              color: 'white'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px'
              }}>
                <button
                  onClick={togglePlay}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  title="Play/Pause"
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>

                <button
                  onClick={restart}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  title="Restart"
                >
                  ↻
                </button>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <button
                    onClick={toggleMute}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? '🔇' : '🔊'}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{
                      width: '80px',
                      height: '4px',
                      cursor: 'pointer'
                    }}
                  />
                </div>

                <span style={{
                  marginLeft: 'auto',
                  whiteSpace: 'nowrap',
                  fontSize: '12px'
                }}>
                  {currentTime} / {duration}
                </span>

                <button
                  onClick={toggleFullscreen}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  title="Fullscreen"
                >
                  ⛶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
