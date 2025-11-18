export function pad(n: number, w = 2) {
  return n.toString().padStart(w, '0')
}

export function toZ(dt: Date) {
  const yyyy = dt.getUTCFullYear()
  const mm = pad(dt.getUTCMonth() + 1)
  const dd = pad(dt.getUTCDate())
  const hh = pad(dt.getUTCHours())
  const mi = pad(dt.getUTCMinutes())
  const ss = pad(dt.getUTCSeconds())
  return `${yyyy}${mm}${dd}T${hh}${mi}${ss}Z`
}

export function formatInTimeZone(date: Date, timeZone: string, fmt: Intl.DateTimeFormatOptions | string) {
  const opts: Intl.DateTimeFormatOptions = typeof fmt === 'string' ? patternToOptions(fmt) : fmt
  return new Intl.DateTimeFormat(undefined, { timeZone, ...opts }).format(date)
}

function patternToOptions(pattern: string): Intl.DateTimeFormatOptions {
  // Simple tokens mapping for patterns like 'EEEE, MMM d, yyyy' and 'h:mm a'
  const options: Intl.DateTimeFormatOptions = {}
  if (pattern.includes('EEEE')) options.weekday = 'long'
  if (pattern.includes('MMM')) options.month = 'short'
  if (pattern.includes('MMMM')) options.month = 'long'
  if (pattern.includes('yyyy')) options.year = 'numeric'
  if (/(\bd\b| d[, ]| d$)/.test(pattern) || pattern.includes(' d')) options.day = 'numeric'
  if (pattern.includes('h')) options.hour = 'numeric'
  if (pattern.includes('mm')) options.minute = '2-digit'
  if (pattern.includes('a')) options.hour12 = true
  return options
}
