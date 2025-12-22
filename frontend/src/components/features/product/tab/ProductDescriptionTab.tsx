import React from 'react'

interface ProductDescriptionTabProps {
  description: string;
}


function ProductDescriptionTab({ description }: ProductDescriptionTabProps) {


  return (
    <div className="tab-content custom-tab" id="myTabContent">
      <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
        <div className="product-description">
          <div className="container-fluid" data-bootstrap-contains="containers">
            <div className="container">
              <div className="row">
                <div dangerouslySetInnerHTML={{ __html: description }} className="col-12">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductDescriptionTab