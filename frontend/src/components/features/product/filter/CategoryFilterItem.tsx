import { CategoryT } from '@/types/common.types'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface CategoryFilterItemProps {
  category: CategoryT;
}

function CategoryFilterItem({ category }: CategoryFilterItemProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString())
    const currentFcatids = params.getAll('fcatid')
    const categoryIdStr = category.id + ""

    // Nếu đã có category này thì xóa đi
    if (currentFcatids.includes(categoryIdStr)) {
      // Xóa tất cả fcatid
      params.delete('fcatid')
      // Thêm lại các fcatid khác (không bao gồm category hiện tại)
      currentFcatids
        .filter(id => id !== categoryIdStr)
        .forEach(id => params.append('fcatid', id))
    } else {
      // Thêm category mới
      params.append('fcatid', categoryIdStr)
    }

    // Update URL
    router.push(`?${params.toString()}`)
  }

  const isActive = searchParams.getAll('fcatid').includes(category.id + "")

  return (
    <li>
      <div className="form-check ps-0 m-0 category-list-box">
        <input
          name="fcatid"
          className="checkbox_animated fcatid"
          type="checkbox"
          checked={isActive}
          onChange={handleClick}
        />
        <label className="form-check-label" htmlFor="fruit" onClick={handleClick}>
          <span className="name">
            {category.name}
          </span>
        </label>
      </div>
    </li>
  )
}

export default CategoryFilterItem