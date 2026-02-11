import React, { useRef, useState } from 'react';

export default function VideoSection() {
  const videoRef = useRef(null);
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
    if (videoRef.current?.parentElement) {
      videoRef.current.parentElement.requestFullscreen().catch(() => {
        // Fallback if fullscreen not supported
      });
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-nunito font-semibold text-text-dark mb-6">
              Voyez la simplicité en action
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Découvrez comment nous transformons des heures de gestion administrative en
              quelques clics sereins. Nous remettons l&apos;humain au centre, et la technique au
              placard.
            </p>
            <button className="btn btn-primary">Demander une démo</button>
          </div>

          {/* Video Player */}
          <div className="relative">
            <div className="relative bg-black rounded-custom overflow-hidden shadow-custom" ref={videoRef?.parentElement}>
              <video
                ref={videoRef}
                src="/assets/LEAN-Publicité 1.mp4"
                className="w-full h-auto"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="text-white text-6xl">▶</div>
                </div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center gap-2 text-white text-sm md:text-base">
                  <button
                    onClick={togglePlay}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
                    title="Play/Pause"
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>

                  <button
                    onClick={restart}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
                    title="Restart"
                  >
                    ↻
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
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
                      className="w-16 md:w-20 h-1.5 bg-white bg-opacity-30 rounded-full accent-primary-green cursor-pointer"
                    />
                  </div>

                  <span className="text-xs md:text-sm ml-auto whitespace-nowrap">
                    {currentTime} / {duration}
                  </span>

                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
                    title="Fullscreen"
                  >
                    ⛶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
