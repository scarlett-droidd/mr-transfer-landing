"use client";

import { useEffect, useId, useRef } from "react";

/**
 * LabCircuitBackground
 * ---------------------
 * Reemplazo de PurpleVeinBackground.tsx para Mr. Transfer Lab.
 * Fondo de "laboratorio": líneas tipo circuito/tubería con glow real
 * (doble trazo + filter blur simulando neón), nodos que laten como
 * pulso eléctrico, y un leve efecto de "corriente" recorriendo las
 * líneas para sensación premium/animada.
 *
 * Uso:
 * <LabCircuitBackground className="absolute inset-0 -z-10" />
 *
 * Colores tomados de la paleta de marca:
 * - base:        #2B3A55 (azul petróleo)
 * - línea:       #4A6FA5 (azul acero)
 * - línea glow:  #8FD9C4 (verde menta, glow sutil) + #C9A86A (dorado, acentos)
 */

type LabCircuitBackgroundProps = {
  className?: string;
  /** Intensidad del glow, 0 a 1. Default 0.6 */
  intensity?: number;
  /** Si además de las líneas quieres el pulso animado recorriendo el circuito */
  animated?: boolean;
};

export default function LabCircuitBackground({
  className = "",
  intensity = 0.6,
  animated = true,
}: LabCircuitBackgroundProps) {
  const uid = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Respeta prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches && svgRef.current) {
      svgRef.current.querySelectorAll(".lcb-pulse").forEach((el) => {
        (el as SVGElement).style.animationPlayState = "paused";
        (el as SVGElement).style.opacity = "0";
      });
    }
  }, []);

  const glowStd = 4 + intensity * 4; // 4 a 8

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        ref={svgRef}
        className="h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Fondo base petróleo -> medianoche, con leve viñeta */}
          <radialGradient id={`${uid}-bg`} cx="50%" cy="35%" r="85%">
            <stop offset="0%" stopColor="#324567" />
            <stop offset="55%" stopColor="#2B3A55" />
            <stop offset="100%" stopColor="#1C2740" />
          </radialGradient>

          {/* Glow filter para las líneas de circuito */}
          <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation={glowStd} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={`${uid}-glow-soft`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation={glowStd * 1.6} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
            </feMerge>
          </filter>

          {/* Gradiente para el "pulso" que recorre el circuito */}
          <linearGradient id={`${uid}-pulse-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8FD9C4" stopOpacity="0" />
            <stop offset="45%" stopColor="#8FD9C4" stopOpacity="0" />
            <stop offset="50%" stopColor="#B8F2E0" stopOpacity="1" />
            <stop offset="55%" stopColor="#8FD9C4" stopOpacity="0" />
            <stop offset="100%" stopColor="#8FD9C4" stopOpacity="0" />
          </linearGradient>

          <pattern
            id={`${uid}-circuit`}
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* --- Trazo base (glow ancho, difuso) --- */}
            <g
              filter={`url(#${uid}-glow-soft)`}
              stroke="#4A6FA5"
              strokeWidth="3"
              fill="none"
              opacity={0.5 + intensity * 0.3}
              strokeLinecap="round"
            >
              <path d="M0 50 L70 50 L70 0" />
              <path d="M120 0 L120 35 L200 35" />
              <path d="M0 120 L35 120 L35 200" />
              <path d="M70 200 L70 150 L150 150 L150 100 L200 100" />
              <path d="M200 160 L160 160 L160 200" />
            </g>

            {/* --- Trazo nítido encima (línea real, con glow ajustado) --- */}
            <g
              filter={`url(#${uid}-glow)`}
              stroke="#7FA3D9"
              strokeWidth="2.5"
              fill="none"
              opacity="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 50 L70 50 L70 0" />
              <path d="M120 0 L120 35 L200 35" />
              <path d="M0 120 L35 120 L35 200" />
              <path d="M70 200 L70 150 L150 150 L150 100 L200 100" />
              <path d="M200 160 L160 160 L160 200" />
            </g>

            {/* --- Núcleo blanco-azulado fino, simula el "hot spot" de neón --- */}
            <g
              stroke="#EAF2FF"
              strokeWidth="0.75"
              fill="none"
              opacity="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 50 L70 50 L70 0" />
              <path d="M120 0 L120 35 L200 35" />
              <path d="M0 120 L35 120 L35 200" />
              <path d="M70 200 L70 150 L150 150 L150 100 L200 100" />
              <path d="M200 160 L160 160 L160 200" />
            </g>

            {/* --- Nodos (soldaduras) con pulso --- */}
            <g filter={`url(#${uid}-glow)`}>
              <circle cx="70" cy="50" r="4.5" fill="#C9A86A" opacity="0.9" />
              <circle cx="35" cy="120" r="4.5" fill="#8FD9C4" opacity="0.9" />
              <circle cx="150" cy="100" r="4.5" fill="#C9A86A" opacity="0.9" />
              <circle cx="120" cy="35" r="3.5" fill="#8FD9C4" opacity="0.85" />
            </g>

            {/* Nodos núcleo brillante */}
            <circle cx="70" cy="50" r="1.6" fill="#FFF6DF" />
            <circle cx="35" cy="120" r="1.6" fill="#E4FFF6" />
            <circle cx="150" cy="100" r="1.6" fill="#FFF6DF" />
            <circle cx="120" cy="35" r="1.2" fill="#E4FFF6" />

            {/* Micro-componente tipo resistor / chip, decorativo */}
            <rect
              x="150"
              y="130"
              width="18"
              height="9"
              rx="2"
              fill="none"
              stroke="#7FA3D9"
              strokeWidth="1.5"
              opacity="0.6"
              filter={`url(#${uid}-glow)`}
            />

            {animated && (
              <>
                <rect
                  className="lcb-pulse"
                  x="-40"
                  y="47"
                  width="40"
                  height="6"
                  fill={`url(#${uid}-pulse-grad)`}
                  style={{
                    animation: "lcb-travel-1 5.5s linear infinite",
                    animationDelay: "0s",
                  }}
                />
                <rect
                  className="lcb-pulse"
                  x="70"
                  y="147"
                  width="6"
                  height="40"
                  fill={`url(#${uid}-pulse-grad)`}
                  transform="rotate(90 73 167)"
                  style={{
                    animation: "lcb-travel-2 7s linear infinite",
                    animationDelay: "1.6s",
                  }}
                />
              </>
            )}
          </pattern>
        </defs>

        {/* Fondo */}
        <rect x="0" y="0" width="1200" height="800" fill={`url(#${uid}-bg)`} />

        {/* Patrón de circuito repetido */}
        <rect x="0" y="0" width="1200" height="800" fill={`url(#${uid}-circuit)`} />

        {/* Viñeta superior/inferior para que el patrón no compita con el contenido */}
        <rect x="0" y="0" width="1200" height="800" fill="#1C2740" opacity="0.12" />
        <linearGradient id={`${uid}-vignette`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1C2740" stopOpacity="0.55" />
          <stop offset="15%" stopColor="#1C2740" stopOpacity="0" />
          <stop offset="85%" stopColor="#1C2740" stopOpacity="0" />
          <stop offset="100%" stopColor="#1C2740" stopOpacity="0.55" />
        </linearGradient>
        <rect x="0" y="0" width="1200" height="800" fill={`url(#${uid}-vignette)`} />
      </svg>

      <style jsx>{`
        @keyframes lcb-travel-1 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(1240px);
          }
        }
        @keyframes lcb-travel-2 {
          0% {
            transform: rotate(90deg) translateX(0);
          }
          100% {
            transform: rotate(90deg) translateX(1240px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .lcb-pulse {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
