import { apiFetchSites } from '@/lib/api/api';
import { CategoryT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'

interface CateT {
  item: CategoryT;
  children: CateT[];
}

function NavTopCategoryItemSubList({ item }: { item: CateT }) {


  return (
    <div key={item.item.id} className={`list-${item.item.id}`}>
      <div className="category-title-box">
        <h5>
          <a href={"/" + item.item.alias}>{item.item.name}</a>
        </h5>
      </div>

      {item.children && item.children.length > 0 && (
        <ul className="pl-4 mt-1">
          {item.children.map((child, idx) => (
            <li key={idx}>
              <a href={"/" + child.item.alias}>{child.item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavTopCategoryItemSubList