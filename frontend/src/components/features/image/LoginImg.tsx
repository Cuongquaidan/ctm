import ImageError from '@/components/ui/ImageError'
import React from 'react'

function LoginImg() {
  return (
    <div className="image-contain">
      <ImageError width={550} height={465} src="/assets/eme2023/images/inner-page/log-in.png" className="img-fluid" alt="Đặng nhập" />
    </div>
  )
}

export default LoginImg