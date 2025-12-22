import React from 'react'

function SearchNoButton() {
  return (
    <div className="searchbar-box order-xl-1 d-none d-xl-block"

    >
      <input type="search" className="form-control" id="exampleFormControlInput1"
        placeholder="search for product, delivered to your door..." style={{
          height: "56px"
        }} />
      <button className="btn search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  )
}

export default SearchNoButton