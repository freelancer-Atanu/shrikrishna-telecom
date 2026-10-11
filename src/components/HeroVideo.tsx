"use client";

import { useEffect, useRef, useState } from "react";

const UNLOCK_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;

export default function HeroVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const stopUnlockRef = useRef<() => void>(() => {});
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onFirstInteraction = (event: Event) => {
      // The sound button handles its own clicks.
      if (buttonRef.current?.contains(event.target as Node)) return;
      stopUnlockRef.current();
      video.muted = false;
      setMuted(false);
      video.play().catch(() => {});
    };

    stopUnlockRef.current = () => {
      UNLOCK_EVENTS.forEach((type) => window.removeEventListener(type, onFirstInteraction));
    };

    // Browsers only allow autoplay with sound if the visitor has already interacted
    // with the site. Try with sound first; otherwise play muted and switch sound on
    // at the first tap, click or key press anywhere on the page.
    video.muted = false;
    video
      .play()
      .then(() => setMuted(false))
      .catch(() => {
        video.muted = true;
        setMuted(true);
        video.play().catch(() => {});
        UNLOCK_EVENTS.forEach((type) => window.addEventListener(type, onFirstInteraction));
      });

    return () => stopUnlockRef.current();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    stopUnlockRef.current();
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted) video.play().catch(() => {});
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-64 w-full bg-navy-deep object-cover md:h-80"
      />
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        aria-pressed={!muted}
        className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/70 text-cream transition hover:bg-navy-deep"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5" aria-hidden="true">
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          {muted ? (
            <path d="m23 9-6 6M17 9l6 6" />
          ) : (
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
          )}
        </svg>
      </button>
    </>
  );
}
