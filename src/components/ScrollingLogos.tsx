import React from 'react'
import { TikTok, YouTube, GoogleAds, Meta, Instagram, OpenAI } from './BrandIcons'

const items = [
  { label: 'TikTok', Icon: TikTok },
  { label: 'YouTube', Icon: YouTube },
  { label: 'Google Ads', Icon: GoogleAds },
  { label: 'Meta Ads', Icon: Meta },
  { label: 'Instagram', Icon: Instagram },
  { label: 'OpenAI', Icon: OpenAI },
]

export default function ScrollingLogos(){
  return (
    <div className="scroll-logos" aria-label="Supported platforms">
      <div className="scroll-track">
        {[...items, ...items, ...items].map((it, i) => (
          <div className="scroll-item" key={i}>
            <it.Icon />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
