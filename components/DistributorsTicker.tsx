"use client";

/**
 * DistributorsTicker
 * Cinta púrpura que se desliza continuamente mostrando los logos
 * de los distribuidores que trabajan con Mr. Transfer Lab.
 *
 * Usa inline styles para máxima compatibilidad (sin depender de styled-jsx).
 */

import { CSSProperties } from "react";

type Distributor = {
  name: string;
  logoUrl?: string;
  scale?: number;
};

type Props = {
  distributors?: Distributor[];
  speedSeconds?: number;
};

const DEFAULT_DISTRIBUTORS: Distributor[] = [
  { name: "@bluesupply.cr", logoUrl: "/logos-distribuidores/bluesupplycr.png" },
  { name: "@kedavratattoosupply", logoUrl: "/logos-distribuidores/kedavratattoosupply.png" },
  { name: "@balitattoosupplay", logoUrl: "/logos-distribuidores/balitattoosupplay.png" },
  { name: "@underground_tattoosupply", logoUrl: "/logos-distribuidores/underground_tattoosupply.png", scale: 1.4 },
  { name: "@tattoosupplypanama", logoUrl: "/logos-distribuidores/tattoosupplypanama.png" },
  { name: "@brasitattoosupply", logoUrl: "/logos-distribuidores/brasitattoosupply.png" },
  { name: "@bloodsupply_tattoo", logoUrl: "/logos-distribuidores/bloodsupply_tattoo.png" },
  { name: "@evolutiontattoo_insumos", logoUrl: "/logos-distribuidores/evolutiontattoo_insumos.png", scale: 1.7 },
  { name: "@newtechtattoosupplies", logoUrl: "/logos-distribuidores/newtechtattoosupplies.png", scale: 1.4 },
  { name: "@hinaltattoosupply", logoUrl: "/logos-distribuidores/hinaltattoosupply.png?v=2", scale: 2.1 },
  { name: "@wizardtsltd", logoUrl: "/logos-distribuidores/wizardtsltd.png" },
  { name: "@hindi.tattoo.supply.lebanon", logoUrl: "/logos-distribuidores/hinditattoosupplylebanon.png" },
  { name: "@lp_tattoo_supply", logoUrl: "/logos-distribuidores/lp_tattoo_supply.png" },
];

const wrapperStyle: CSSProperties = {
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#5B3A6E",
  transform: "skewY(-2deg)",
  height: "120px",
  padding: "0",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
};

const trackStyle = (speed: number): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: "48px",
  width: "max-content",
  height: "100%",
  animation: `ticker-scroll ${speed}s linear infinite`,
});

const itemStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "180px",
  height: "100%",
  transform: "skewY(2deg)",
};

const logoWrapperStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const logoStyle: CSSProperties = {
  height: "110px",
  maxHeight: "110px",
  width: "auto",
  maxWidth: "180px",
  objectFit: "contain",
  display: "block",
  filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.35))",
};

const nameStyle: CSSProperties = {
  color: "#ffffff",
  fontWeight: 700,
  fontSize: "18px",
  letterSpacing: "0.5px",
  whiteSpace: "nowrap",
};

export default function DistributorsTicker({
  distributors = DEFAULT_DISTRIBUTORS,
  speedSeconds = 25,
}: Props) {
  // duplicamos la lista para que el loop sea infinito y sin "salto" visible
  const items = [...distributors, ...distributors];

  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div style={wrapperStyle}>
        <div style={trackStyle(speedSeconds)}>
          {items.map((d, i) => (
            <div style={itemStyle} key={i}>
              {d.logoUrl ? (
                <div style={logoWrapperStyle}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.logoUrl}
                    alt={d.name}
                    style={{
                      ...logoStyle,
                      transform: d.scale ? `scale(${d.scale})` : undefined,
                    }}
                    loading="eager"
                  />
                </div>
              ) : (
                <span style={nameStyle}>{d.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
