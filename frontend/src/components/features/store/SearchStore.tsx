import LordIcon from '@/components/ui/icons/LordIcon'
import React from 'react'

function SearchStore() {
  return (
    <div className="vendore-breadscrumb-section p-0 rounded w-100" style={{
      backgroundImage: "none"
    }}>
      <div className="breadscrumb-contain w-100 rounded">
        <form className="position-relative" action="https://ca-ctm.systems.com.vn/cua-hang/cua-hang-1/tab-product">
          <span className="d-flex">
            {/* <lord-icon src="/assets/eme2023/lordicon/msoeawqm.json" stroke="120" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233" style="width:25px;height:25px"></lord-icon> */}
            <LordIcon icon={require('@/assets/lordicon/msoeawqm.json')} primary='#f58233' secondary='#f58233' size={25}></LordIcon>
          </span>
          <input type="hidden" name="sort" value="most_popular" />
          <input type="text" className="form-control rounded" placeholder="Nhập tên sản phẩm..." name="ss" />
          <button className="btn theme-bg-color text-white m-0" type="submit">Tìm kiếm</button>
        </form>
      </div>
    </div>
  )
}

export default SearchStore