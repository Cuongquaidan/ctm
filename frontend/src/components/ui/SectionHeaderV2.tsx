"use client"
import React, { useEffect, useState } from 'react'
import TimingBoxDHMS from '@/components/ui/TimingBoxDHMS';

interface SectionHeaderV2Props {
  title?: string;
  link?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  hasIcon?: boolean;
  hasUnderline?: boolean;
}



function SectionHeaderV2({ title, startDate, endDate, link, description, hasIcon = true, hasUnderline = false }: SectionHeaderV2Props) {

  return (
    <div className="title title-flex wow fadeIn">
      <div>
        {title && <h2>
          {title}
        </h2>}

        {hasIcon && (
          <span className="title-leaf">
            <svg className="icon-width">
              <use xlinkHref="/assets/eme2023/svg/leaf.svg#leaf"></use>
            </svg>
          </span>)}
        {hasUnderline && <span className="title-leaf" />}

        {description && (
          <p className='d-none d-lg-block'>
            {description}
          </p>
        )}
      </div>
      {startDate && endDate && (
        <TimingBoxDHMS startDate={startDate} endDate={endDate}></TimingBoxDHMS>
      )}
    </div>
  )
}

export default SectionHeaderV2