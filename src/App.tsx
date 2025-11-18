import React from 'react'
import { useMemo } from 'react'
import { parseParams } from './lib/params'
import { formatInTimeZone } from './lib/time'
import { buildCalendarLinks } from './lib/calendar'
import { CheckCircle, Calendar, Clock, MapPin, Phone } from './components/Icons'
import { Countdown } from './components/Countdown'
import MiniCalendar from './components/MiniCalendar'

export default function App() {
  const params = useMemo(() => parseParams(window.location.search), [])

  const title = 'The "Intent-Based" Client Pipeline'
  const host = params.assigned_to ?? 'Your Host'
  const invitee = params.invitee_full_name ?? 'Valued Guest'
  const email = params.invitee_email
  const tz = params.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone

  const startISO = params.event_start_time
  const endISO = params.event_end_time

  const start = startISO ? new Date(startISO) : null
  const end = endISO ? new Date(endISO) : null

  const dateLine = start
    ? formatInTimeZone(start, tz, "EEEE, MMM d, yyyy")
    : 'Date TBA'
  const timeLine = start && end
    ? `${formatInTimeZone(start, tz, 'h:mm a')} - ${formatInTimeZone(end, tz, 'h:mm a')} (${tz})`
    : 'Time TBA'

  const location = params.meeting_location || 'Zoom (link by email)'
  const phone = params.text_reminder_number || params.answer_1
  const bookingLink = params.booking_link || 'https://cal.com/johnizokun-klyvo/intro-call-40min'

  const calendar = useMemo(() => {
    return buildCalendarLinks({
      title,
      description: `Call with ${host}${invitee ? ` and ${invitee}` : ''}`,
      start,
      end,
      tz,
      location,
    })
  }, [title, host, invitee, start?.toISOString(), end?.toISOString(), tz, location])

  return (
    <div className="page">
      <header className="hero brand-watermark">
        <div className="hero-bg" aria-hidden></div>
        <div className="hero-inner">
          <div className="title-row">
            <div className="avatar" aria-hidden title="Klyvo AI">K</div>
            <div>
              <h1>{title}</h1>
              <p className="subtitle">Your host is John Izokun, Lead Engineer</p>
            </div>
          </div>
          <div className="hero-meta">
            {start && <span className="pill">Upcoming</span>}
            {start && <Countdown to={start} />}
            <a className="btn primary gold" href={bookingLink} target="_blank" rel="noreferrer">Book with me</a>
            <a className="btn outline gold" href="https://docs.google.com/spreadsheets/d/1dQw7LIhuWpIBpK7dW6pZ3ou51d4zNIIwiDGDkezcg1Y/edit?usp=sharing" target="_blank" rel="noreferrer">Case studies</a>
            <a className="btn outline gold" href="https://www.linkedin.com/in/john-izokun-073012253/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="card video-card gold-border">
          <div className="video-frame">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GuyZspG3-Po?rel=0&modestbranding=1&controls=1"
              title="Klyvo AI Intro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="card highlight gold-border">
          <div className="row">
            <div className="col">
              <div className="fact"><Calendar /> <span>{dateLine}</span></div>
              <div className="fact"><Clock /> <span>{timeLine}</span></div>
              <div className="fact"><MapPin /> <span>{location}</span></div>
              {phone && (
                <div className="fact"><Phone /> <span>SMS: {phone}</span></div>
              )}
              {email && (
                <div className="fact small">Contact: <a href={`mailto:${email}`}>{email}</a></div>
              )}
            </div>
            <div className="col actions">
              <a className="btn primary gold" href={bookingLink} target="_blank" rel="noreferrer">Add to Google</a>
              <a className="btn outline gold" href={bookingLink} target="_blank" rel="noreferrer">Apple/Outlook (.ics)</a>
              <button className="btn outline gold" onClick={() => {
                const lines = [
                  `${title} with ${host}`,
                  dateLine,
                  timeLine,
                  location,
                  email ? `Contact: ${email}` : ''
                ].filter(Boolean).join('\n')
                navigator.clipboard.writeText(lines)
              }}>Copy details</button>
              <a className="btn primary gold" href={bookingLink} target="_blank" rel="noreferrer">Book with me</a>
            </div>
          </div>
        </section>

        <section className="card gold-border">
          <h3>Need a different time?</h3>
          <MiniCalendar onSelect={() => {
            window.open(bookingLink, '_blank', 'noopener,noreferrer')
          }} />
          {params.reschedule_url ? (
            <p style={{ marginTop: 12 }}><a className="btn outline gold" href={params.reschedule_url}>Reschedule</a></p>
          ) : (
            <p style={{ marginTop: 12 }}>
              Or choose a new slot:
              {' '}<a className="btn outline gold" href={bookingLink} target="_blank" rel="noreferrer">Book with me</a>
            </p>
          )}
        </section>
      </main>

     <div className="bottom-actions">
       <a className="btn outline gold" href="https://klyvo.ca/" target="_blank" rel="noreferrer">Visit klyvo.ca</a>
     </div>

      <footer className="footer">
        <p>Powered by <a href="https://klyvo.ca/" target="_blank" rel="noreferrer">Klyvo AI</a> &copy;. A team of engineers. All rights reserved.</p>
      </footer>
    </div>
  )
}
