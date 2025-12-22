import LordIcon from '@/components/ui/icons/LordIcon'
import React from 'react'

function HeaderSearchMain() {
  return (
    <form action="/search" className="search-box flex-fill me-xl-4 me-3" method="GET">
      <div className="input-group">
        <input type="search" className="form-control" placeholder="Nhập tên sản phẩm..." name="s" />
        <button className="btn" type="submit" aria-label="Tìm kiếm">
          {/* <lord-icon src="/assets/eme2023/lordicon/msoeawqm.json" stroke="120" trigger="loop-on-hover" colors="primary:#fff,secondary:#fff" style="width:25px;height:25px"></lord-icon> */}
          <LordIcon size={30} icon={require("@/assets/lordicon/msoeawqm.json")} primary="#ffffff" secondary="#ffffff"></LordIcon>
        </button>
      </div>
    </form>
  )
}

export default HeaderSearchMain