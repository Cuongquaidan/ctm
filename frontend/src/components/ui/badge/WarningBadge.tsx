import React from 'react'

interface WarningBadgeProps {
  text: string
}
function WarningBadge({ text }: WarningBadgeProps) {
  return (
    <label className='menu-label warning-label'>{text}</label>
  )
}

export default WarningBadge