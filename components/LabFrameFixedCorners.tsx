"use client";

function Corner({
  color,
  size,
  rotate,
  withStripes,
}: {
  color: string;
  size: number;
  rotate: 0 | 90 | 180 | 270;
  withStripes?: boolean;
}) {
  return (
    <svg
      className="absolute"
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        ...(rotate === 0 ? { top: 0, left: 0 } : {}),
        ...(rotate === 90 ? { top: 0, right: 0 } : {}),
        ...(rotate === 180 ? { bottom: 0, right: 0 } : {}),
        ...(rotate === 270 ? { bottom: 0, left: 0 } : {}),
      }}
      viewBox="0 0 60 60"
      aria-hidden="true"
    >
      <path
        d="M 1 60 L 1 20 L 20 20 L 28 2 L 60 2"
        stroke={color}
        strokeWidth="3"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="4" cy="4" r="3.5" fill={color} />
      {withStripes && (
        <g stroke={color} strokeWidth="4.5" strokeLinecap="round">
          <line x1="32" y1="6" x2="39" y2="-1" />
          <line x1="40" y1="6" x2="47" y2="-1" />
          <line x1="48" y1="6" x2="55" y2="-1" />
        </g>
      )}
    </svg>
  );
}

export default function LabFrameFixedCorners({
  className = "",
  color = "#8FD9C4",
  cornerSize = 36,
}: {
  className?: string;
  color?: string;
  cornerSize?: number;
}) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {/* 4 connecting lines */}
      <div className="absolute top-0" style={{ left: cornerSize - 1, right: cornerSize - 1, height: 4, backgroundColor: color, opacity: 1 }} />
      <div className="absolute bottom-0" style={{ left: cornerSize - 1, right: cornerSize - 1, height: 2, backgroundColor: color, opacity: 0.8 }} />
      <div className="absolute left-0" style={{ top: cornerSize - 1, bottom: cornerSize - 1, width: 2, backgroundColor: color, opacity: 0.8 }} />
      <div className="absolute right-0" style={{ top: cornerSize - 1, bottom: cornerSize - 1, width: 2, backgroundColor: color, opacity: 0.8 }} />

      <Corner color={color} size={cornerSize} rotate={0} withStripes />
      <Corner color={color} size={cornerSize} rotate={90} />
      <Corner color={color} size={cornerSize} rotate={180} withStripes />
      <Corner color={color} size={cornerSize} rotate={270} />
    </div>
  );
}
