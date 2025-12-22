import { FLASH_SALE_TYPES } from '@/lib/constants/constants';
import { getInfoTimeFlashSale } from '@/lib/helper';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface TimingBoxProps {
  startDate: string;
}

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
  isActive: boolean
}
function TimingBox() {
  const searchParams = useSearchParams()
  const currentTime = searchParams.get('ft') || '00:00'
  const { flashType } = getInfoTimeFlashSale();
  const currentActiveIndex = FLASH_SALE_TYPES.indexOf(currentTime);
  const currentTimeIndex = FLASH_SALE_TYPES.indexOf(flashType);
  const nextTimeIndex = (FLASH_SALE_TYPES.indexOf(flashType) + 1);
  const nextTime = FLASH_SALE_TYPES[nextTimeIndex];
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
    if (!isMounted) return


    const calculateTimeLeft = () => {
      const now = new Date()
      const start = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        parseInt(nextTime.split(':')[0]),
        parseInt(nextTime.split(':')[1]),
        0
      )

      const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const startOnlyDate = new Date(start.getFullYear(), start.getMonth(), start.getDate())

      const isSameDay = nowDate.getTime() === startOnlyDate.getTime()

      if (!isSameDay) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false
        })
        return
      }

      const nowTime = now.getTime()
      const startTime = start.getTime()

      if (nowTime >= startTime) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false
        })
        return
      }

      // Tính thời gian còn lại đếm ngược tới giờ start
      const distance = startTime - nowTime
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

    // Chạy lần đầu
    calculateTimeLeft()

    // Update mỗi giây
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [isMounted])
  if (currentActiveIndex !== currentTimeIndex && currentActiveIndex !== nextTimeIndex) {
    return null
  }
  return (
    <div className="timing-box d-flex justify-content-end h-100 ms-3 ms-xl-5">
      {isMounted && timeLeft.isActive && (
        <div className="timing d-flex align-items-center">
          <i className="fa-thin fa-clock font-20 me-1"></i>
          <h6 className="name">{currentActiveIndex === currentTimeIndex && "Thời gian còn:"}
            {currentActiveIndex === nextTimeIndex && "Bắt đầu sau:"}

          </h6>
          <div className="time ms-1 clockdiv1" >
            <ul>
              <li>
                <div className="counter bg-black text-white d-flex flex-column rounded border justify-content-center">
                  <div>
                    <span className="hours fw-bold fs-5 line-height-1">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <span className="line-height-1">giờ</span>
                </div>
              </li>
              <li></li>
              <li>
                <div className="counter bg-black text-white d-flex flex-column rounded border justify-content-center">
                  <div>
                    <span className="minutes fw-bold fs-5 line-height-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <span className="line-height-1">phút</span>
                </div>
              </li>
              <li></li>
              <li>
                <div className="counter bg-black text-white d-flex flex-column rounded border justify-content-center">
                  <div>
                    <span className="seconds fw-bold fs-5 line-height-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                  <span className="line-height-1">giây</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

    </div>
  )
}

export default TimingBox