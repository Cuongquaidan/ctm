import React from 'react'

interface DangerBadgeProps {
  text: string
}
function DangerBadge({ text }: DangerBadgeProps) {
  return (
    <label className='menu-label'>{text}</label>
  )
}

export default DangerBadge