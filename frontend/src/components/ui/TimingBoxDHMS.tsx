"use client"
import { checkIsWithinTimeRange } from '@/lib/helper';
import { scale } from 'framer-motion';
import { Clock } from 'lucide-react';
import React, { useEffect, useState } from 'react'

interface TimingBoxDHMSProps {
  title?: string;
  startDate: Date;
  endDate: Date;
  hasText?: boolean;
  scale?: number;
}
function TimingBoxDHMS({ title, startDate, endDate, hasText = false, scale = 1 }: TimingBoxDHMSProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const isActive = checkIsWithinTimeRange(startDate, endDate);
  if (!isActive) {
    return null;
  }
  const calculateTimeLeft = () => {
    const distance = endDate.getTime() - new Date().getTime();
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 20 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft()
    }, 1000)
    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className='timing-box'>
      <div className='timing d-flex align-items-center gap-1'>
        <Clock size={16} />
        <h6 className="name">Expires in :</h6>
        <div className="time " id="clockdiv-1"
          data-hours="1" data-minutes="2" data-seconds="3">
          {title && (
            <div className="product-title">
              <h4>{title}</h4>
            </div>
          )}
          <ul className=''

          >
            <li>
              <div className="counter d-flex flex-column items-center justify-center" style={{
                width: `${scale ? scale * 20 : 20}px`,
                height: `${scale ? scale * 20 : 20}px`
              }}>
                <div className="days d-block"
                  style={{
                    width: "auto",
                    height: "auto"
                  }}
                >
                  <h6>{timeLeft.days}</h6>
                </div>
                {
                  hasText && <h6>Days</h6>
                }
              </div>
            </li>
            <li>
              <div className="counter d-flex flex-column items-center justify-center" style={{
                width: `${scale ? scale * 20 : 20}px`,
                height: `${scale ? scale * 20 : 20}px`
              }}>
                <div className="hours d-block" style={{
                  width: "auto",
                  height: "auto"
                }}>
                  <h6>{timeLeft.hours}</h6>
                </div>
                {
                  hasText && <h6>Hours</h6>
                }
              </div>
            </li>
            <li>
              <div className="counter d-flex flex-column items-center justify-center" style={{
                width: `${scale ? scale * 20 : 20}px`,
                height: `${scale ? scale * 20 : 20}px`
              }}>
                <div className="minutes d-block" style={{
                  width: "auto",
                  height: "auto"
                }}>
                  <h6>{timeLeft.minutes}</h6>
                </div>
                {
                  hasText && <h6>Min</h6>
                }
              </div>
            </li>
            <li>
              <div className="counter d-flex flex-column items-center justify-center" style={{
                width: `${scale ? scale * 20 : 20}px`,
                height: `${scale ? scale * 20 : 20}px`
              }}>
                <div className="seconds d-block" style={{
                  width: "auto",
                  height: "auto"
                }}>
                  <h6>{timeLeft.seconds}</h6>
                </div>
                {
                  hasText && <h6>Sec</h6>
                }
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TimingBoxDHMS