'use client';

import { CSSProperties } from 'react';

interface SlidingTextEffectProps {
  text: string;
  slideColor?: string;
  duration?: number;
  className?: string;
}

export function SlidingTextEffect({
  text,
  slideColor = '#00d4ff',
  duration = 3,
  className = '',
}: SlidingTextEffectProps) {
  const animationStyle: CSSProperties = {
    backgroundImage: `linear-gradient(90deg, #000000 0%, #000000 20%, ${slideColor} 50%, #000000 80%, #000000 100%)`,
    backgroundSize: '200% 100%',
    backgroundPosition: '-200% center',
    animation: `slidingColor ${duration}s infinite linear`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <>
      <style>{`
        @keyframes slidingColor {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
      <div
        style={animationStyle}
        className={`font-bold ${className}`}
      >
        {text}
      </div>
    </>
  );
}