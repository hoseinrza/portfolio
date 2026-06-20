import clsx from 'clsx'

/** Subtle atomic-network backdrop. Decorative only — kept at very low opacity. */
export default function MolecularBackground({ className }: { className?: string }) {
  const nodes = [
    [60, 80], [220, 40], [380, 120], [120, 220], [320, 260],
    [480, 60], [500, 220], [40, 360], [260, 380], [440, 380],
  ]
  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [1, 5], [2, 5], [2, 6], [3, 7], [4, 8], [4, 9], [5, 6], [8, 9],
  ]

  return (
    <svg
      aria-hidden="true"
      className={clsx('pointer-events-none select-none', className)}
      viewBox="0 0 540 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="var(--accent)" strokeWidth="1" opacity="0.12">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      <g fill="var(--accent)" opacity="0.18">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} />
        ))}
      </g>
    </svg>
  )
}
