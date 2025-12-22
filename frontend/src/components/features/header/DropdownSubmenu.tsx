import React from 'react'

function DropdownSubmenu({ items }: { items: any[] }) {
  return (
    <ul className="sub-menu">{
      items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))
    }</ul>
  )
}

export default DropdownSubmenu