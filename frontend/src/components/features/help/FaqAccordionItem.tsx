"use client"
import React, { ReactNode, useRef } from 'react'

interface FaqAccordionItemProps {
  question: string
  answer: ReactNode
  isActive: boolean
  onToggle: () => void
  id: string
}

function FaqAccordionItem({
  question,
  answer,
  isActive,
  onToggle,
  id
}: FaqAccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null)

  // Update maxHeight when isActive changes
  React.useEffect(() => {
    if (bodyRef.current) {
      if (isActive) {
        bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`
      } else {
        bodyRef.current.style.maxHeight = '0px'
      }
    }
  }, [isActive])

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${!isActive ? 'collapsed' : ''}`}
          type="button"
          onClick={onToggle}
        >
          {question} <i className="fa-solid fa-angle-down"></i>
        </button>
      </h2>
      <div
        ref={bodyRef}
        id={`collapse${id}`}
        className={`accordion-collapse  ${isActive ? 'show' : ''}`}
        style={{
          maxHeight: isActive ? 'fit-content' : '0px',
          transition: 'max-height 0.3s ease',
          overflow: 'hidden'
        }}
      >
        <div className="accordion-body">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default FaqAccordionItem
