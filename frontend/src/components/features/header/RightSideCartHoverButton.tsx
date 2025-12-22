import LordIcon from '@/components/ui/icons/LordIcon'
import React from 'react'
import CartBoxHover from '@/components/features/cart/CartBoxHover'
import { useAuthContext } from '@/components/features/provider/AuthProvider'

function RightSideCartHoverButton() {
  const { hasAuth, numberOfStoreInCart, cart } = useAuthContext();
  return (
    <li className="right-side">
      <div className="btn p-0 position-relative header-wishlist header-icon boxCartCount onhover-dropdown" aria-label="Giỏ hàng"
        style={{
          zIndex: 9999
        }}
      >
        {/* <lord-icon src="/assets/eme2023/lordicon/lpddubrl.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
        <LordIcon icon={require("@/assets/lordicon/lpddubrl.json")} primary="var(--theme-color)" secondary="var(--theme-color)"></LordIcon>
        {hasAuth && (<span className="position-absolute top-0 start-100 translate-middle badge shoppingCart"><span className="numberCart w-5 h-5 p-1"
          style={{
            backgroundColor: "#ff7272"
          }}
        >{cart?.list.length || 0}</span>
          <span className="visually-hidden">unread messages</span>
        </span>)}
        <CartBoxHover></CartBoxHover>
      </div>
    </li>
  )
}

export default RightSideCartHoverButton