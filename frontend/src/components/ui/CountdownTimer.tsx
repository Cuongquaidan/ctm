"use client"
import { checkIsWithinTimeRange } from '@/lib/helper';
import React, { useEffect, useState } from 'react'

interface CountdownTimerProps {
  title?: string;
  startDate: string;
  endDate: string;
  hasText?: boolean;
}
function CountdownTimer({ title, startDate, endDate, hasText = true }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const isActive = checkIsWithinTimeRange(new Date(startDate), new Date(endDate));
  if (!isActive) {
    return null;
  }
  const calculateTimeLeft = () => {
    const distance = new Date(endDate).getTime() - new Date().getTime();
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
    <div className="time deal-timer product-deal-timer mx-md-0 mx-auto" id="clockdiv-1"
      data-hours="1" data-minutes="2" data-seconds="3">
      {title && (
        <div className="product-title">
          <h4>{title}</h4>
        </div>
      )}
      <ul>
        <li>
          <div className="counter d-flex flex-column items-center justify-center">
            <div className="days d-block">
              <h5>{timeLeft.days}</h5>
            </div>
            {
              hasText && <h6>Days</h6>
            }
          </div>
        </li>
        <li>
          <div className="counter d-flex flex-column items-center justify-center">
            <div className="hours d-block">
              <h5>{timeLeft.hours}</h5>
            </div>
            {
              hasText && <h6>Hours</h6>
            }
          </div>
        </li>
        <li>
          <div className="counter d-flex flex-column items-center justify-center">
            <div className="minutes d-block">
              <h5>{timeLeft.minutes}</h5>
            </div>
            {
              hasText && <h6>Min</h6>
            }
          </div>
        </li>
        <li>
          <div className="counter d-flex flex-column items-center justify-center">
            <div className="seconds d-block">
              <h5>{timeLeft.seconds}</h5>
            </div>
            {
              hasText && <h6>Sec</h6>
            }
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CountdownTimer