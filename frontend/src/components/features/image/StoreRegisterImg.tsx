import ImageError from '@/components/ui/ImageError'
import React from 'react'

function StoreRegisterImg() {
  return (
    <div className="image-contain">
      <ImageError width={933} height={799} src="/assets/eme2023/images/vendor-page/become-saller.svg" className="img-fluid" alt="HONEYNET"
        style={{
          width: "512px"
        }}
      />
    </div>
  )
}

export default StoreRegisterImg