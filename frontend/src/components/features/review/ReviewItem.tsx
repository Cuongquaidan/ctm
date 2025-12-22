"use client"
import { ReviewReplyT, ReviewT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React, { useEffect, useState } from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { fetchReviewRepliesByReview } from '@/lib/api/review'
import { fetchAllReviewReplies } from '@/lib/api/replyReview'
import { PaginatedDataT } from '@/types/api.type'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'

interface ReviewItemProps {
  item: ReviewT;
}

function ReviewItem({ item }: ReviewItemProps) {
  const [replies, setReplies] = useState<PaginatedDataT<ReviewReplyT>>()
  const handleFetchRepliesByReviewId = async (reviewId: number) => {
    const resdata = await fetchAllReviewReplies({
      reviewIdSh: reviewId,
    });
    setReplies(resdata);
  }
  useEffect(() => {
    handleFetchRepliesByReviewId(item.id);
  }, [])
  return (
    <li className="mb-4" style={{
      width: "100%"
    }}>
      <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4">
        {/* Logo hoặc hình bên trái */}
        <div className="flex-shrink-0">
          <ImageError
            src="https://ca-ctm.systems.com.vn/styles/logo.png"
            alt="store-logo"
            width={60}
            height={60}
            className="rounded-full object-contain "
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="flex-1">
          {/* Tên sản phẩm + sao */}
          <div className="flex justify-between items-center mb-1">
            <a href="#" className="font-semibold text-[#ff6600] text-base">
              {item.fullname || 'Sản phẩm siêu test'}
            </a>
            <CustomRating numberOfRatings={0} rating={item.point} />
          </div>

          {/* Text đánh giá */}
          <p className="text-gray-800 mb-2">{item.des}</p>

          {/* Ảnh đánh giá */}
          {JSON.parse(item.images) && JSON.parse(item.images).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {JSON.parse(item.images).map((img: string, i: number) => (
                <ImageError
                  key={i}
                  src={img !== null ? IMAGES_BASE_URL + (img[0] !== "/" ? "/" : "") + img : '/images/logo.png'}
                  alt={`Ảnh đánh giá ${i + 1}`}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover  img-review"
                />
              ))}
            </div>
          )}

          {/* Phản hồi người bán */}
          {replies?.data.map((reply) => (
            <div
              key={reply.id}
              className="bg-gray-50 rounded-lg p-3 mt-3 "
            >
              <p className="font-semibold mb-1 text-gray-700">
                Phản hồi của Người Bán
              </p>
              <p className="text-gray-800 text-sm mb-2">{reply.content}</p>
              {/* {reply.images && reply.images.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {reply.images.map((img, i) => (
                    <ImageError
                      key={i}
                      src={img}
                      alt={`Ảnh phản hồi ${i + 1}`}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover img-review"
                    />
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </li>
  )
}

export default ReviewItem
