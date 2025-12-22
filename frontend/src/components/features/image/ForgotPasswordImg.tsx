import ImageError from '@/components/ui/ImageError'
import React from 'react'

function ForgotPasswordImg() {
  return (
    <div className="image-contain">
      <ImageError width={800} height={600} src="/assets/eme2023/images/inner-page/forgot.png" className="img-fluid" alt="Quên mật khẩu" />
    </div>
  )
}

export default ForgotPasswordImg