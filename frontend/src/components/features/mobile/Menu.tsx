import React from 'react'

function Menu() {
  return (
    <div className="mobile-menu d-md-none d-block mobile-cart">
      <ul>
        <li className="mobile-category">
          <a href="#">
            <i className="fa-solid fa-table-list text-white"></i>
            <span>Danh mục</span>
          </a>
        </li>

        <li>
          <a href="/search" className="search-box">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
            <span>Tìm kiếm</span>
          </a>
        </li>

        <li>
          <a href="/customers/wishlist" className="notifi-wishlist btnWishlist">
            <i className="fa-regular fa-heart text-white"></i>
            <span>Yêu thích</span>
          </a>
        </li>

        <li>
          <a href="/customers/cart">
            <i className="fa-solid fa-cart-shopping text-white"></i>
            <span>Giỏ hàng</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu