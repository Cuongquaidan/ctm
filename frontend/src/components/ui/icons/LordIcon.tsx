"use client"
import React, { useEffect, useRef } from 'react'
import { Player } from '@lordicon/react';

interface LordIconProps {
  icon: string;
  primary?: string;
  secondary?: string;
  tertiary?: string;
  size?: number;

}

function LordIcon({ icon, primary, secondary, tertiary, size = 30 }: LordIconProps) {
  // const ICON = require(link)
  const iconRef = useRef<Player>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const iconElement = iconRef.current;
    const containerElement = containerRef.current;
    if (iconElement && containerElement) {
      const handleMouseEnter = () => {
        iconElement.playFromBeginning();
      }
      const handleMouseLeave = () => {
        iconElement.goToLastFrame();
      }
      containerElement.addEventListener("mouseenter", handleMouseEnter);
      containerElement.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        containerElement.removeEventListener("mouseenter", handleMouseEnter);
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    }
  }, []);
  return (
    <div ref={containerRef}
    >
      <Player icon={icon} ref={iconRef} colors={`outline:#121331,primary:${primary},secondary:${secondary}, tertiary:${tertiary}`}
        size={size}

      />
    </div>
  )
}

export default LordIcon