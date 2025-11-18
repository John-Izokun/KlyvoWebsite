import React, { useMemo } from 'react'

function getMonthMatrix(date = new Date()){ 
  const year = date.getFullYear()
  const month = date.getMonth()
  const first = new Date(year, month, 1)
  const startDay = first.getDay() // 0=Sun
  const daysInMonth = new Date(year, month+1, 0).getDate()
  const cells: Array<{ day: number|null, date?: Date }> = []
  for(let i=0;i<startDay;i++) cells.push({ day: null })
  for(let d=1; d<=daysInMonth; d++) cells.push({ day: d, date: new Date(year, month, d) })
  while(cells.length % 7 !== 0) cells.push({ day: null })
  return { year, month, cells }
}

export default function MiniCalendar({ onSelect }: { onSelect: (date: Date) => void }){
  const today = new Date()
  const { year, month, cells } = useMemo(() => getMonthMatrix(today), [])
  const monthName = today.toLocaleString(undefined, { month: 'long' })
  const dow = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const isToday = (d?: Date) => d && d.toDateString() === today.toDateString()

  return (
    <div className="mini-cal gold-border">
      <div className="mc-header">
        <span className="mc-title">{monthName} {year}</span>
      </div>
      <div className="mc-dow">
        {dow.map(x => <span key={x}>{x}</span>)}
      </div>
      <div className="mc-grid">
        {cells.map((c, i) => (
          <button
            key={i}
            className={`mc-cell ${c.day ? 'has' : 'empty'} ${isToday(c.date) ? 'today' : ''}`}
            onClick={() => c.date && onSelect(c.date)}
            disabled={!c.day}
            aria-label={c.date ? c.date.toDateString() : undefined}
            title={c.date ? c.date.toDateString() : undefined}
          >
            {c.day ?? ''}
          </button>
        ))}
      </div>
    </div>
  )
}
