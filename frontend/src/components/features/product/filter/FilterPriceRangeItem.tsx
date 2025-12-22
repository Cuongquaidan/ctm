
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

interface FilterPriceRangeItemProps {
  label: string;
  value: string;
}

function FilterPriceRangeItem({ label, value }: FilterPriceRangeItemProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    const currentFprices = params.getAll('fprice')

    // Nếu đã có price này thì xóa đi
    if (currentFprices.includes(value)) {
      params.delete('fprice')
      currentFprices
        .filter(p => p !== value)
        .forEach(p => params.append('fprice', p))
    } else {
      // Thêm price mới
      params.append('fprice', value)
    }

    // Update URL
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const isActive = searchParams.getAll('fprice').includes(value)

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`badge  mb-2 fw-300 px-2 py-2 me-1 font-14 fprice ${isActive ? 'bg-theme text-white' : 'bg-light text-body'}`}
      data-val={value}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default FilterPriceRangeItem