import React from 'react'

export default function FloatingBadges({ to }: { to: string }){
  const items = [
    '$85k in <60 days',
    '$105k in 1 quarter',
    '+$100k in 6 months',
    '€70k in 3 months',
    '22 placements in 55 days',
    '4 key healthcare clients',
  ]

  return (
    <div className="floating-badges" aria-label="Case study highlights">
      {items.map((label, i) => (
        <a key={i} className="float-badge" href={to} target="_blank" rel="noreferrer" title={label}>
          {label}
        </a>
      ))}
    </div>
  )
}
