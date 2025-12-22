import { BookT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import Box3Option from '@/components/features/product/components/Box3Option'
import { formatCurrency } from '@/lib/helper'
import BoxPrice from '../components/BoxPrice'

function BookItem({ book }: { book: BookT }) {
  return (
    <div className="product-box wow fadeIn border-0">
      {book.isBestSeller && (
        <div className="label-box"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            padding: "12px",
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "spaceBetween"
          }}
        >
          <label className="label"
            style={{
              backgroundColor: "#ff4f4f",
              color: "#fff",
              padding: "calc(5px + 3 * (100vw - 320px) / 1600) calc(8px + 4 * (100vw - 320px) / 1600) calc(6px + 3 * (100vw - 320px) / 1600)",
              textTransform: "capitalize",
              fontSize: "calc(12px + 2 * (100vw - 320px) / 1600)",
              fontWeight: 600,
              lineHeight: 1,
              borderRadius: 2,
            }}
          >best</label>
        </div>
      )}
      <div className="product-image">
        <div className="front">
          <a href={`/product/${book.id}`}>
            <ImageError src={book.image} className="img-fluid  lazyload"
              alt={book.name} width={250} height={250} />
          </a>
        </div>
        <Box3Option productId={Number.parseInt(book.id)}></Box3Option>
      </div>
      <div className="product-detail position-relative">
        <h6 className="weight">{book.category}</h6>
        <a href={`/product/${book.id}`}>
          <h5 className="name">{book.name}
          </h5>
        </a>
        <h6 className="byers"><span>By</span> {book.author}</h6>
        <BoxPrice price={book.price}></BoxPrice>

      </div>
    </div>
  )
}

export default BookItem