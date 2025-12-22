import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface FilterSelectedItemProps {
  label: string;
  value: string;
  filterType: 'fcatid' | 'fprice' | 'frating';
}

function FilterSelectedItem({ label, value, filterType }: FilterSelectedItemProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleDelete = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Lấy tất cả values của filter type này
    const currentValues = params.getAll(filterType)

    // Xóa tất cả values của filter type
    params.delete(filterType)

    // Thêm lại các values khác (không bao gồm value cần xóa)
    currentValues
      .filter(v => v !== value)
      .forEach(v => params.append(filterType, v))

    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <li>
      <a dangerouslySetInnerHTML={{ __html: label }}></a>
      <a className="clearFilterCatId ms-2">
        <i
          className="fa-solid fa-x text-white font-10 cursor-pointer"
          onClick={handleDelete}
        ></i>
      </a>
    </li>
  )
}

export default FilterSelectedItem