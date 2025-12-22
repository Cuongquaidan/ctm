import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface FilterRatingItemProps {
  label: string;
  value: number;
}

function FilterRatingItem({ label, value }: FilterRatingItemProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString())
    const currentFratings = params.getAll('frating')
    const valueStr = value + ""

    // Nếu đã có rating này thì xóa đi
    if (currentFratings.includes(valueStr)) {
      params.delete('frating')
      currentFratings
        .filter(r => r !== valueStr)
        .forEach(r => params.append('frating', r))
    } else {
      // Thêm rating mới
      params.append('frating', valueStr)
    }

    // Update URL
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const isActive = searchParams.getAll('frating').includes(value + "")
  return (
    <li onClick={handleClick}>
      <div className="form-check ps-0 m-0 category-list-box">
        <input
          name="frating"
          className="checkbox_animated frating"
          type="checkbox"
          checked={isActive}
          onChange={handleClick}
          readOnly
        />
        <div className="form-check-label">
          <ul className="rating">
            {Array.from({ length: value }).map((_, index) => (
              <li key={index}>
                <i className="fa-solid fa-star text-warning"></i>


              </li>
            ))}
          </ul>
          <span className="text-content">(từ {value} sao)</span>
        </div>
      </div>
    </li>
  )
}

export default FilterRatingItem