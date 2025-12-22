import React from 'react'

interface DropdownItemProps {
  isNew?: boolean;
  items?: {
    title: string;
    link: string;
  }[];
  title: string;
  link: string;
}

function DropdownItem({ isNew, items, title, link }: DropdownItemProps) {
  return (
    <li className={`${items ? "sub-dropdown-hover" : ""}`}>
      <a className="dropdown-item" href={link}>{title}
        {isNew && <span className="new-text"><i
          className="fa-solid fa-bolt-lightning"></i></span>}</a>
      {items && (
        <ul className="sub-menu">
          {items.map((child, index) => (
            <li key={index}>
              <a href={child.link}>{child.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default DropdownItem