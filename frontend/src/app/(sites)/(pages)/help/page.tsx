"use client"
import React, { useState } from 'react'
import HelpCard from '@/components/features/help/HelpCard'
import FaqAccordionItem from '@/components/features/help/FaqAccordionItem'
import SearchDropdown from '@/components/features/help/SearchDropdown'
import { helpCards, faqItems, productOptions } from '@/assets/data/Help'

function HelpPage() {
  const [activeId, setActiveId] = useState<string>('One')
  const [selectedProduct, setSelectedProduct] = useState<string>('All Product')

  const handleToggle = (id: string) => {
    setActiveId(prevId => prevId === id ? '' : id)
  }

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product)
    // Có thể thêm logic filter ở đây nếu cần
  }

  return (
    <>
      <section className="faq-breadcrumb pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Help Center</h2>
                <p>We are glad having you here looking for the answer. As our team hardly working on the
                  product, feel free to ask any questions. We Believe only your feedback might move us
                  forward.</p>
                <div className="faq-form-tag">
                  <div className="input-group">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" className="form-control" id="exampleFormControlInput1"
                      placeholder="name@example.com" />
                    <SearchDropdown
                      options={productOptions}
                      selectedOption={selectedProduct}
                      onSelect={handleProductSelect}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Faq Question section Start */}
      <section className="faq-contain">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="slider-4-2 product-wrapper grid grid-cols-4 bg-white gap-3">
                {helpCards.map((card) => (
                  <div key={card.id}>
                    <HelpCard
                      iconPath={card.iconPath}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faq Question section End */}

      <section className="faq-box-contain section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="faq-contain">
                <h2>Frequently Asked Questions</h2>
                <p>We are answering most frequent questions. No worries if you not find exact one. You can find
                  out more by searching or continuing clicking button below or directly <a
                    href="contact-us.html" className="theme-color text-decoration-underline">contact our
                    support.</a></p>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="faq-accordion">
                <div className="accordion">
                  {faqItems.map((item) => (
                    <FaqAccordionItem
                      key={item.id}
                      id={item.id}
                      question={item.question}
                      answer={
                        <>
                          {item.answer.map((paragraph, index) => (
                            <p key={index}>
                              {paragraph}
                            </p>
                          ))}
                        </>
                      }
                      isActive={activeId === item.id}
                      onToggle={() => handleToggle(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section End */}

    </>
  )
}

export default HelpPage