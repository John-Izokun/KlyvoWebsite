import { toZ } from './time'

interface BuildArgs {
  title: string
  description?: string
  start: Date | null
  end: Date | null
  tz: string
  location?: string
}

export function buildCalendarLinks(args: BuildArgs) {
  const { title, description = '', start, end, tz, location = '' } = args
  const safeTitle = title || 'Event'

  const startZ = start ? toZ(start) : ''
  const endZ = end ? toZ(end) : ''

  const gcal = new URL('https://calendar.google.com/calendar/render')
  gcal.searchParams.set('action', 'TEMPLATE')
  gcal.searchParams.set('text', safeTitle)
  if (startZ && endZ) gcal.searchParams.set('dates', `${startZ}/${endZ}`)
  if (location) gcal.searchParams.set('location', location)
  if (description) gcal.searchParams.set('details', description)

  const ics = buildICS({ title: safeTitle, description, start, end, tz, location })
  const icsHref = `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`

  return {
    google: gcal.toString(),
    ics: icsHref,
  }
}

function buildICS({ title, description, start, end, tz, location }: BuildArgs) {
  const uid = `${Date.now()}@local`
  const dtstamp = toZ(new Date())
  const dtStart = start ? toZ(start) : ''
  const dtEnd = end ? toZ(end) : ''
  // Note: For full TZ support in ICS, a VTIMEZONE block is needed. We use UTC Z times for simplicity.
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rovo Dev//Appointment Landing//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    dtStart ? `DTSTART:${dtStart}` : '',
    dtEnd ? `DTEND:${dtEnd}` : '',
    `SUMMARY:${escapeICSText(title)}`,
    description ? `DESCRIPTION:${escapeICSText(description)}` : '',
    location ? `LOCATION:${escapeICSText(location)}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean)
  return lines.join('\r\n')
}

function escapeICSText(text: string) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/[,;]/g, (m) => `\\${m}`)
}
