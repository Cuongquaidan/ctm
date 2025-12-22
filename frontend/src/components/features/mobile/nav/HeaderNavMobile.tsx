import React from 'react'
import HeaderNavLeft from '@/components/features/header/HeaderNavLeft'
import HeaderNavMiddleMobile from '@/components/features/mobile/nav/HeaderNavMiddleMobile'
interface HeaderNavMobileProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}
function HeaderNavMobile({ isShow, setIsShow }: HeaderNavMobileProps) {
  return (
    <div className='container-fluid-lg d-block d-md-none'>
      <div className="row">
        <div className="col-12">
          <div className='header-nav'>
            <HeaderNavLeft></HeaderNavLeft>
            <HeaderNavMiddleMobile isShow={isShow} setIsShow={setIsShow}></HeaderNavMiddleMobile>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNavMobile