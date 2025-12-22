import React from 'react'
interface OnlyLeftLineProps {
  quantityInStock: number;
  quantitySold: number;
}

function OnlyLeftLine({ quantityInStock, quantitySold }: OnlyLeftLineProps) {
  return (
    <div className="progress-sec">
      <div className="left-progressbar">
        <h6>Please hurry! Only {quantityInStock} left in stock</h6>
        <div role="progressbar" className="progress warning-progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated"
            style={{ width: `${(quantitySold / (quantityInStock + quantitySold)) * 100}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default OnlyLeftLine