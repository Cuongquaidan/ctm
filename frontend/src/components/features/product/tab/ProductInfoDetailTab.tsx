"use client"
import React from 'react'

interface ProductInfoDetailTabProps {
  info: string;
}

function ProductInfoDetailTab({ info }: ProductInfoDetailTabProps) {
  const infoArray = JSON.parse(info || '[]');

  return (
    <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
      <div className="table-responsive">
        <table className="table info-table">
          <tbody>
            {infoArray.map((item: { title: string; info: string }, index: number) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductInfoDetailTab