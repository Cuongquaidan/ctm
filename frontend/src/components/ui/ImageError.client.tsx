"use client"
import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ImageErrorClientProps extends Omit<ImageProps, 'src' | 'onError'> {
  initialSrc: string;
  alt: string;
  className?: string;
}

function ImageErrorClient({ initialSrc, alt, className, ...props }: ImageErrorClientProps) {
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);

  const handleError = () => {
    setImgSrc('/images/default.jpg');
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}

export default ImageErrorClient