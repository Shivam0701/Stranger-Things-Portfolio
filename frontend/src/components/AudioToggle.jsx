import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element for ambient sound
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    
    // Using a dark ambient sound from a free source
    audioRef.current.src = 'https://assets.mixkit.co/active_storage/sfx/2466/2466-preview.mp3';
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleAudio}
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full bg-black/80 border-2 border-red-600 hover:bg-red-900/50 hover:border-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(212,31,45,0.5)] hover:shadow-[0_0_30px_rgba(212,31,45,0.8)]"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-red-500" />
        ) : (
          <VolumeX className="w-5 h-5 text-red-500" />
        )}
      </Button>
    </div>
  );
};

export default AudioToggle;