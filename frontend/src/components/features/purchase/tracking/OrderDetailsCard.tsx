import React from 'react'
import ImageError from '@/components/ui/ImageError'

interface OrderDetailsCardProps {
  icon: string
  title: string
  content: string | React.ReactNode
}

function OrderDetailsCard({ icon, title, content }: OrderDetailsCardProps) {
  const renderIcon = () => {
    const iconMap: { [key: string]: string } = {
      package: '📦',
      truck: '🚚',
      info: 'ℹ️',
      crosshair: '🎯',
      'map-pin': '📍',
      calendar: '📅',
    }
    return iconMap[icon] || '📦'
  }

  return (
    <div className="order-details-contain">
      <div className="order-tracking-icon">
        <span className="text-content" style={{ fontSize: '24px' }}>{renderIcon()}</span>
      </div>

      <div className="order-details-name">
        <h5 className="text-content">{title}</h5>
        {typeof content === 'string' ? (
          icon === 'truck' ? (
            <ImageError src={content} className="img-fluid" alt={title} width={100} height={40} />
          ) : (
            <h4>{content}</h4>
          )
        ) : (
          content
        )}
      </div>
    </div>
  )
}

export default OrderDetailsCard
