"use client"
import React, { useRef, useState, useEffect } from 'react'

interface SearchDropdownProps {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}

function SearchDropdown({ options, selectedOption, onSelect }: SearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option: string) => {
    onSelect(option)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Animate dropdown menu
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`
        menuRef.current.style.opacity = '1'
      } else {
        menuRef.current.style.maxHeight = '0px'
        menuRef.current.style.opacity = '0'
      }
    }
  }, [isOpen])

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-md faq-dropdown-button"
        type="button"
        onClick={handleToggle}
      >
        {selectedOption}
        <i className={`fa-solid fa-angle-${isOpen ? 'up' : 'down'} ms-2`}></i>
      </button>
      <ul
        ref={menuRef}
        className={`dropdown-menu faq-dropdown-menu dropdown-menu-end d-flex flex-col ${isOpen ? 'show' : ''}`}
        style={{
          maxHeight: '0px',
          opacity: 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          position: 'absolute',
          right: 0,
          top: '0%',
          transform: 'translateY(-100%)',
          marginTop: '0.5rem'
        }}
      >
        {options.map((option, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleSelect(option)
              }}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchDropdown
