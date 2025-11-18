import React from 'react'

export const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

export const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

export const MapPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

export const Phone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"></path>
  </svg>
)

export const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

export const LinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden {...props}>
    <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM7 20H4V9h3v11zM5.5 7.7c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 .9-.7 1.7-1.7 1.7zM20 20h-3v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3V9h2.9v1.5h.1c.4-.7 1.4-1.5 2.8-1.5 3 0 3.5 2 3.5 4.7V20z" />
  </svg>
)

export const CalDotCom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="currentColor" opacity="0.08" />
    <path d="M16.5 15.2c-.9 1.1-2.1 1.8-3.7 1.8-2.9 0-5.1-2.2-5.1-5s2.2-5 5.1-5c1.6 0 2.9.7 3.8 1.8" />
  </svg>
)

export const GoogleSheets = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden {...props}>
    <path fill="currentColor" opacity="0.1" d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
    <path fill="currentColor" d="M13 2v5h5"/>
    <rect x="7" y="10" width="10" height="7" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <line x1="12" y1="10" x2="12" y2="17" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="7" y1="12.5" x2="17" y2="12.5" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)
