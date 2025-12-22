"use client"
import ImageError from '@/components/ui/ImageError'
import React, { useState } from 'react'
interface SlickSliderImagesDetailProps {
  name: string;
  gallery: string[];
}

function SlickSliderImages({ name, gallery }: SlickSliderImagesDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleClick = (originalIndex: number) => {
    if (!isDragging) {
      setActiveIndex(originalIndex);
    }
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isZooming) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isZooming) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
      return;
    }

    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseEnter = () => {
    if (!isDragging) {
      setIsZooming(true);
    }
  };

  const handleMouseLeaveMain = () => {
    setIsZooming(false);
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 200;

    if (dragOffset > threshold) {
      const newIndex = (activeIndex > 0 ? activeIndex - 1 : gallery.length - 1);
      setActiveIndex(newIndex);
    } else if (dragOffset < -threshold) {
      const newIndex = (activeIndex < gallery.length - 1 ? activeIndex + 1 : 0);
      setActiveIndex(newIndex);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleGalleryMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleGalleryMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    setDragOffset(diff);
  };

  const handleGalleryMouseUp = () => {
    if (!isDragging) return;

    const threshold = 50;
    if (dragOffset > threshold) {
      const newIndex = (activeIndex > 0 ? activeIndex - 1 : gallery.length - 1);
      setActiveIndex(newIndex);
    } else if (dragOffset < -threshold) {
      const newIndex = (activeIndex < gallery.length - 1 ? activeIndex + 1 : 0);
      setActiveIndex(newIndex);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleGalleryMouseLeave = () => {
    if (isDragging) {
      handleGalleryMouseUp();
    }
  };

  const sortedGallery = [
    ...gallery.slice(activeIndex),
    ...gallery.slice(0, activeIndex)
  ];



  return (
    <div className="product-left-box" >
      <div className="row g-2">
        <div className="col-12">
          <div
            className="product-main-1 no-arrow d-flex relative w-full overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveMain}
            style={{
              aspectRatio: 1 / 1,
              cursor: isZooming ? 'zoom-in' : (isDragging ? 'grabbing' : 'grab'),
              userSelect: 'none',
            }}
          >
            {gallery.map((img, originalIndex) => (
              <div key={originalIndex}
                style={{
                  maxWidth: "100%",
                  transition: isDragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease',
                }}
                className={`slider-main shrink-0 absolute top-0 left-0 ${activeIndex === originalIndex ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="slider-image product-image mx-auto relative w-full h-full">
                  <ImageError
                    draggable={false}
                    width={1000}
                    height={1000}
                    src={img}
                    id={`img-${originalIndex}`}
                    data-zoom-image={img}
                    className="img-fluid image_zoom_cls-0 lazyload object-contain cursor-crosshair"
                    alt={name}
                    style={isZooming ? {
                      transform: 'scale(4)',
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      transition: 'transform 0.1s ease-out',
                    } : {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 mt-4">
          <div
            className="bottom-slider-image left-slider no-arrow slick-top d-flex gap-4 overflow-hidden w-100"
            onMouseDown={handleGalleryMouseDown}
            onMouseMove={handleGalleryMouseMove}
            onMouseUp={handleGalleryMouseUp}
            onMouseLeave={handleGalleryMouseLeave}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            {sortedGallery.map((img, displayIndex) => {
              const originalIndex = (activeIndex + displayIndex) % gallery.length;
              // chon index 3 => 0-1-2 thanh 3 4 5
              // 3+3 chi du 6 = 0

              return (
                <div
                  key={originalIndex}
                  className={`gallery-slider shrink-0 ${activeIndex === originalIndex ? "active" : ""}`}
                  style={{ width: "calc(25% - 12px)" }}
                  onClick={() => handleClick(originalIndex)}
                >
                  <div className="sidebar-image">
                    <ImageError draggable={false} width={1000} height={1000} src={img} className="img-fluid lazyload object-contain" alt={name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlickSliderImages