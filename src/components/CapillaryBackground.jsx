/**
 * Serpentine: each 180° bend uses a vertical chord at (lx+r) or (rx−r) so arcs are
 * valid SVG (no same-x degenerate arcs). Horizontals stop short of bends by r for
 * tangent continuity + true round joins. Extra viewBox padding avoids cap clipping.
 */
function buildSerpentinePath({ leftX, rightX, radius, yStart, rows }) {
  const r = radius;
  const lx = leftX;
  const rx = rightX;
  let y = yStart;

  let d = `M ${rx} ${y} L ${lx + r} ${y}`;

  for (let i = 0; i < rows; i++) {
    d += ` A ${r} ${r} 0 1 0 ${lx + r} ${y + 2 * r}`;
    d += ` L ${rx - r} ${y + 2 * r}`;
    d += ` A ${r} ${r} 0 1 1 ${rx - r} ${y + 4 * r}`;
    d += ` L ${lx + r} ${y + 4 * r}`;
    y += 4 * r;
  }

  const yEnd = yStart + rows * 4 * r;
  d += ` L ${rx} ${yEnd}`;

  return d;
}

export function CapillaryBackground() {
  const pad = 4;
  const vbW = 200;
  const vbH = 210;
  const leftX = 8;
  const rightX = 192;
  const radius = 5;
  const yStart = 14;
  const rows = 9;

  const pathD = buildSerpentinePath({
    leftX,
    rightX,
    radius,
    yStart,
    rows,
  });

  const viewBox = `${-pad} ${-pad} ${vbW + 2 * pad} ${vbH + 2 * pad}`;

  const pathProps = {
    d: pathD,
    pathLength: 100,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-heli-deep"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full min-h-[100dvh] overflow-visible"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          {...pathProps}
          stroke="#4a8bab"
          strokeOpacity={0.14}
          strokeWidth={0.52}
        />

        <path
          {...pathProps}
          stroke="#7eb8d4"
          strokeOpacity={0.056}
          strokeWidth={0.2}
        />

        <path
          {...pathProps}
          className="capillary-liquid capillary-liquid--primary"
          stroke="#c9957a"
          strokeOpacity={0.2}
          strokeWidth={0.28}
        />

        <path
          {...pathProps}
          className="capillary-liquid capillary-liquid--secondary"
          stroke="#b8d0dc"
          strokeOpacity={0.154}
          strokeWidth={0.18}
        />

        <path
          {...pathProps}
          className="capillary-liquid capillary-liquid--glow"
          stroke="#9eb6c4"
          strokeOpacity={0.126}
          strokeWidth={0.36}
        />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-heli-deep via-transparent to-heli-deep/40"
        style={{ opacity: 0.8 }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-heli-deep/50 via-transparent to-heli-deep"
        style={{ opacity: 0.58 }}
      />
    </div>
  );
}
