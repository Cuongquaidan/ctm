import React from 'react'
import { ImageProps } from 'next/image'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import ImageErrorClient from './ImageError.client'

interface ImageErrorProps extends Omit<ImageProps, 'src' | 'onError'> {
  src?: string | null;
  alt: string;
  className?: string;
}

function ImageError({ src, alt, className, ...props }: ImageErrorProps) {
  // Server-side logic: Process src to full URL for better SEO
  // Only add IMAGES_BASE_URL if src doesn't already start with http/https or /
  let processedSrc = '/images/default.jpg';

  if (src) {
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
      // Already absolute URL or starts with /
      processedSrc = src;
    } else {
      // Relative path, add IMAGES_BASE_URL
      processedSrc = `${IMAGES_BASE_URL}/${src}`;
    }
  }

  return (
    <ImageErrorClient
      {...props}
      initialSrc={processedSrc}
      alt={alt}
      className={className}
    />
  )
}

export default ImageError