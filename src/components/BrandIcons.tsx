import React from 'react'

export const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...props}>
    <path fill="#000" d="M9.2 9.5c.3 0 .6 0 .9.1v2.3c-.3-.1-.6-.1-.9-.1-1.7 0-3 1.4-3 3.1s1.4 3.1 3.1 3.1 3.1-1.3 3.1-3V3h.1c.6 1.7 2 3 3.7 3.5v2.1c-1.3-.1-2.6-.6-3.7-1.3v6.4c0 3-2.4 5.3-5.3 5.3S3.9 16.7 3.9 13.8s2.4-5.3 5.3-5.3z"/>
    <path fill="#25F4EE" opacity="0.9" d="M10.5 3v9.7c0 1.8-1.5 3.3-3.3 3.3-.8 0-1.6-.3-2.2-.8.4 1.4 1.7 2.4 3.2 2.4 1.9 0 3.3-1.5 3.3-3.3V7.3c1.1.7 2.4 1.2 3.7 1.3V6.5c-1.7-.5-3-1.8-3.7-3.5h-1z"/>
    <path fill="#FE2C55" opacity="0.9" d="M9.2 9.5c.3 0 .6 0 .9.1v1.2c-.3-.1-.6-.1-.9-.1-1.4 0-2.6.9-3 2.2-.1-.3-.1-.6-.1-.9 0-1.7 1.4-3.1 3.1-3.1zM14.4 8.6c1 .6 2.2 1 3.5 1.1V7.6c-1.2-.2-2.4-.7-3.5-1.6v2.6z"/>
  </svg>
)

export const YouTube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...props}>
    <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000"/>
    <path d="M10 9v6l5-3-5-3z" fill="#fff"/>
  </svg>
)

export const GoogleAds = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...props}>
    <circle cx="6" cy="18" r="3.2" fill="#4285F4" />
    <path d="M8 4l8 14" stroke="#34A853" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M14 4c3.3 0 6 2.7 6 6 0 2.4-1.4 4.5-3.5 5.4" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
)

export const Meta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" aria-hidden {...props}>
    <path d="M3 16c2.5-6 5.5-9 8-4 2.5-5 5.5-2 10 4" stroke="#0866FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M3 16c3-5 6-5 9 0 3-5 6-5 9 0" stroke="#0866FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
)

export const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...props}>
    <defs>
      <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F58529"/>
        <stop offset="50%" stopColor="#DD2A7B"/>
        <stop offset="100%" stopColor="#8134AF"/>
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#ig)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="url(#ig)" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
  </svg>
)

export const OpenAI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...props}>
    <path d="M12 2l3.5 2-1 3.7L18 10l-3.5 2 1 3.7L12 18l-3.5-2 1-3.7L6 10l3.5-2-1-3.7L12 2z" fill="#10A37F"/>
  </svg>
)
