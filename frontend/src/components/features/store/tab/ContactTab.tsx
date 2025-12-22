'use client'
import React, { useState } from 'react'
import ImageError from '@/components/ui/ImageError'
import { StoreT } from '@/types/common.types'
import CustomInput from '@/components/features/auth/CustomInput'

function ContactTab({ store }: { store: StoreT }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    if (input.value.length > 10) {
      input.value = input.value.slice(0, 10)
    }
  }

  return (
    <>

      <section className="contact-box-section">
        <div className="container-fluid-lg">
          <div className="row g-lg-5 g-3">
            <div className="col-lg-12">
              <div className="left-sidebar-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-image">
                      <ImageError src="/assets/eme2023/images/inner-page/contact-us.png" width={600} height={400}
                        className="img-fluid blur-up lazyloaded" alt={store.name} />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-title">
                      <h3>Get In Touch</h3>
                    </div>

                    <div className="contact-detail">
                      <div className="row g-4">
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="contact-detail-title">
                              <h4>Phone</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>{store.address}</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="contact-detail-title">
                              <h4>Email</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>{store.address}</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="contact-detail-title">
                              <h4>London Office</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>{store.address}</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-building"></i>
                            </div>
                            <div className="contact-detail-title">
                              <h4>Bournemouth Office</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>{store.address}</p>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="title d-xxl-none d-block">
                <h2>Contact Us</h2>
              </div>
              <div className="right-sidebar-box">
                <div className="row">
                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <div className="custom-input">
                        <input type="text" className="form-control" id="firstName"
                          placeholder="Enter First Name"
                          value={formData.firstName}
                          onChange={handleInputChange} />

                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <div className="custom-input">
                        <input type="text" className="form-control" id="lastName"
                          placeholder="Enter Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange} />
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <div className="custom-input">
                        <input type="email" className="form-control" id="email"
                          placeholder="Enter Email Address"
                          value={formData.email}
                          onChange={handleInputChange} />
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <div className="custom-input">
                        <input type="tel" className="form-control" id="phone"
                          placeholder="Enter Your Phone Number"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleInputChange}
                          onInput={handlePhoneInput} />
                        <i className="fa-solid fa-mobile-screen-button"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label htmlFor="message" className="form-label">Message</label>
                      <div className="custom-textarea">
                        <textarea className="form-control" id="message"
                          placeholder="Enter Your Message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}></textarea>
                        <i className="fa-solid fa-message"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-animation btn-md fw-bold ms-auto">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-box"><iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0885544289235!2d106.70671417570348!3d10.804529458673361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bcfe90a67b%3A0xb2ded170e42f7138!2zMjkgxJAuIMSQaW5oIELhu5kgTMSpbmgsIFBoxrDhu51uZyAyNiwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1762497852728!5m2!1svi!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactTab
