"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'



const sortOptions = [
  { value: 'most_popular', label: 'Phổ biến' },
  { value: 'most_selling', label: 'Bán chạy' },
  { value: 'best_sale_of', label: 'Giảm giá' },
  { value: 'newst', label: 'Hàng mới' },
  { value: 'low_high_price', label: 'Giá thấp đến cao' },
  { value: 'high_low_price', label: 'Giá cao đến thấp' },
]

function SortBox({ handleClick }: { handleClick?: () => void }) {
  const [isOpenSort, setIsOpenSort] = useState<boolean>(false)

  const router = useRouter()
  const searchParams = useSearchParams()

  const sortBy = searchParams.get('sort') || 'most_popular';
  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', newSort);
    router.push(`?${params.toString()}`, { scroll: false });
    setIsOpenSort(false);
  }





  const getCurrentSortLabel = () => {
    return sortOptions.find(opt => opt.value === searchParams.get('sort'))?.label || 'Phổ biến';
  }
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpenSort(false);
      }
    }

    if (isOpenSort) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpenSort]);
  return (
    <div className="show-button" >
      <div className="top-filter-menu">
        <div className="category-dropdown" >
          <h5 className="text-content" >Sắp xếp :</h5>
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-toggle"
              type="button"
              onClick={() => setIsOpenSort(!isOpenSort)}
              style={{
                padding: "6px 12px"
              }}
            >
              <span>{getCurrentSortLabel()}</span> <i className="fa-solid fa-angle-down"></i>
            </button>
            <ul className={`dropdown-menu ${isOpenSort ? 'show' : ''}`}>
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <a
                    className={`dropdown-item ${sortBy === option.value ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSortChange(option.value);
                    }}
                    href="#"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-button-group mt-0"
            onClick={handleClick}>
            <div className="filter-button d-inline-block d-lg-none">
              <a><i className="fa-solid fa-filter"></i> Bộ lọc</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortBox