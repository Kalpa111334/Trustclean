import { useMemo } from "react";

export function Bubbles({ count = 12 }: { count?: number }) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 8 + Math.random() * 24,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 6}s`,
        opacity: 0.15 + Math.random() * 0.2,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-primary animate-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}
