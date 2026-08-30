"use client";

/**
 * LabFrame
 * ---------
 * Marco decorativo sin fondo, estilo "blueprint de laboratorio":
 * esquinas biseladas en verde menta (#8FD9C4), rayas diagonales
 * técnicas en dos esquinas opuestas, puntos de soldadura en las
 * cuatro puntas, y marcas de medición en los costados.
 *
 * Puramente decorativo: se posiciona absoluto sobre el contenedor
 * padre y no bloquea clicks (pointer-events: none).
 *
 * Uso:
 * <div className="relative">
 *   <LabFrame className="absolute inset-0" />
 *   ...contenido de la sección...
 * </div>
 */

type LabFrameProps = {
  className?: string;
  color?: string;
  variant?: "default" | "wide";
};

export default function LabFrame({
  className = "",
  color = "#8FD9C4",
  variant = "default",
}: LabFrameProps) {
  const isWide = variant === "wide";
  const viewBox = isWide ? "0 0 1000 200" : "0 0 600 400";

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 600 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Marco en las cuatro esquinas */}
      <g stroke={color} strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke">
        {isWide ? (
          <>
            <path d="M 20 70 L 20 30 L 80 30 L 100 20 L 220 20" />
            <path d="M 780 20 L 900 20 L 920 30 L 980 30 L 980 70" />
            <path d="M 980 130 L 980 170 L 920 170 L 900 180 L 780 180" />
            <path d="M 220 180 L 100 180 L 80 170 L 20 170 L 20 130" />
          </>
        ) : (
          <>
            <path d="M 20 90 L 20 30 L 80 30 L 100 20 L 220 20" />
            <path d="M 380 20 L 500 20 L 520 30 L 580 30 L 580 90" />
            <path d="M 580 310 L 580 370 L 520 370 L 500 380 L 380 380" />
            <path d="M 220 380 L 100 380 L 80 370 L 20 370 L 20 310" />
          </>
        )}
      </g>

      {/* Rayas diagonales, esquina superior izquierda */}
      <g stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke">
        <line x1="105" y1="14" x2="118" y2="1" />
        <line x1="120" y1="14" x2="133" y2="1" />
        <line x1="135" y1="14" x2="148" y2="1" />
        <line x1="150" y1="14" x2="163" y2="1" />
      </g>

      {/* Rayas diagonales, esquina inferior derecha */}
      <g stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke">
        {isWide ? (
          <>
            <line x1="895" y1="186" x2="882" y2="199" />
            <line x1="880" y1="186" x2="867" y2="199" />
            <line x1="865" y1="186" x2="852" y2="199" />
            <line x1="850" y1="186" x2="837" y2="199" />
          </>
        ) : (
          <>
            <line x1="495" y1="386" x2="482" y2="399" />
            <line x1="480" y1="386" x2="467" y2="399" />
            <line x1="465" y1="386" x2="452" y2="399" />
            <line x1="450" y1="386" x2="437" y2="399" />
          </>
        )}
      </g>

      {/* Puntos de soldadura en las cuatro esquinas */}
      <circle cx="20" cy="20" r="3" fill={color} />
      <circle cx={isWide ? "980" : "580"} cy="20" r="3" fill={color} />
      <circle cx={isWide ? "980" : "580"} cy={isWide ? "180" : "380"} r="3" fill={color} />
      <circle cx="20" cy={isWide ? "180" : "380"} r="3" fill={color} />

      {/* Marcas de medición en los costados */}
      <g stroke={color} strokeWidth="1.5" opacity="0.6" vectorEffect="non-scaling-stroke">
        {isWide ? (
          <>
            <line x1="20" y1="80" x2="30" y2="80" />
            <line x1="20" y1="100" x2="30" y2="100" />
            <line x1="20" y1="120" x2="30" y2="120" />
            <line x1="980" y1="80" x2="970" y2="80" />
            <line x1="980" y1="100" x2="970" y2="100" />
            <line x1="980" y1="120" x2="970" y2="120" />
          </>
        ) : (
          <>
            <line x1="20" y1="150" x2="30" y2="150" />
            <line x1="20" y1="200" x2="30" y2="200" />
            <line x1="20" y1="250" x2="30" y2="250" />
            <line x1="580" y1="150" x2="570" y2="150" />
            <line x1="580" y1="200" x2="570" y2="200" />
            <line x1="580" y1="250" x2="570" y2="250" />
          </>
        )}
      </g>
    </svg>
  );
}
