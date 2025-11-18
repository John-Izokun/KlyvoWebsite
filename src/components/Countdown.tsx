import React, { useEffect, useMemo, useState } from 'react'

function formatPart(n: number) {
  return n.toString().padStart(2, '0')
}

export function Countdown({ to }: { to: Date | null }) {
  const target = useMemo(() => (to ? to.getTime() : null), [to?.getTime?.()])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!target) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  if (!target) return null
  const diff = Math.max(0, Math.floor((target - now) / 1000))
  if (diff <= 0) return <span className="pill pill-muted">Starting soon</span>

  const days = Math.floor(diff / 86400)
  const hours = Math.floor((diff % 86400) / 3600)
  const mins = Math.floor((diff % 3600) / 60)
  const secs = diff % 60

  return (
    <div className="countdown" title={new Date(target).toString()}>
      {days > 0 && (
        <div className="cd-part"><span className="cd-value">{days}</span><span className="cd-label">d</span></div>
      )}
      <div className="cd-part"><span className="cd-value">{formatPart(hours)}</span><span className="cd-label">h</span></div>
      <div className="cd-part"><span className="cd-value">{formatPart(mins)}</span><span className="cd-label">m</span></div>
      <div className="cd-part"><span className="cd-value">{formatPart(secs)}</span><span className="cd-label">s</span></div>
    </div>
  )
}
