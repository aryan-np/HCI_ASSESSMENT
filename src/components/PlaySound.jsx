// components/PlaySound.jsx
import React, { useEffect, useRef } from 'react';

const PlaySound = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/engine.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.play();
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [play]);

  return null;
};

export default PlaySound;
