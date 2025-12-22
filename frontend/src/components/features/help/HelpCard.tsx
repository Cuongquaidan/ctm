import React from 'react'

interface HelpCardProps {
  iconPath: string
  title: string
  description: string
}

function HelpCard({ iconPath, title, description }: HelpCardProps) {
  return (
    <div className="faq-top-box">
      <div className="faq-box-icon">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="help-icon"
        >
          <path d={iconPath} />
        </svg>
      </div>
      <div className="faq-box-contain">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HelpCard
