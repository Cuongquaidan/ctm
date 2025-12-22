"use client"
import React, { useEffect, useState } from 'react'

interface SectionHeaderProps {
  title?: string;
  link?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  hasIcon?: boolean;
  hasUnderline?: boolean;
}

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
  isActive: boolean

}

function SectionHeader({ title, startDate, endDate, link, description, hasIcon = true, hasUnderline = false }: SectionHeaderProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isActive: false
  })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!startDate || !endDate || !isMounted) return

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const start = new Date(startDate).getTime()
      const end = new Date(endDate).getTime()

      // Kiểm tra sự kiện đã bắt đầu chưa
      if (now < start) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false
        })
        return
      }

      // Kiểm tra sự kiện đã kết thúc chưa
      if (now > end) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false
        })
        return
      }

      // Tính thời gian còn lại
      const distance = end - now
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        hours,
        minutes,
        seconds,
        isActive: true
      })
    }

    calculateTimeLeft()

    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [startDate, endDate, isMounted])

  return (
    <div className="title title-flex wow fadeIn">
      <div className="w-100">
        <div className="d-flex align-items-center">
          {title && <h2>
            {title}
          </h2>}
          <div className="d-flex flex-fill flex-md-row lg:flex-column items-center lg:items-start">
            {isMounted && timeLeft.isActive && (
              <div className="clockdiv1 ms-3">
                <ul>
                  <li>
                    <div className="bg-black text-white d-flex flex-column rounded justify-content-center border w-45 h-30">
                      <span className="hours fw-bold fs-5 line-height-1 text-center">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="bg-black text-white d-flex flex-column rounded justify-content-center border w-45 h-30">
                      <span className="minutes fw-bold fs-5 line-height-1 text-center">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="bg-black text-white d-flex flex-column rounded justify-content-center border w-45 h-30">
                      <span className="seconds fw-bold fs-5 line-height-1 text-center">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {link && <a href={link} className="text-theme ms-auto">Xem tất cả<i className="fa-solid fa-caret-right ms-1"></i></a>}
          </div>

        </div>
        {hasIcon && (
          <span className="title-leaf">
            <svg className="icon-width">
              <use xlinkHref="/assets/eme2023/svg/leaf.svg#leaf"></use>
            </svg>
          </span>)}
        {hasUnderline && <>
          <span className="title-leaf" >
          </span>
          <hr className='w-100 m-0 !-mt-1.5 ' />
        </>}

        {description && (
          <p className='d-none d-lg-block'>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionHeader