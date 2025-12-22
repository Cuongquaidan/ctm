"use client"
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import { useConfig } from '@/components/features/provider/ConfigProvider';
import { motion } from "framer-motion";
import { fixedSiteConfig } from '@/lib/api/config';

function Footer() {
  const { config } = useConfig();


  return (
    <motion.footer
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0 }}

      className="border-top pb-md-0 pb-1 footer-section-2 footer-color-3">
      <div className="container-fluid-lg">
        <div className="main-footer section-b-space section-t-space border-top-0">
          <div className="row g-md-4 g-3">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-logo">
                <div className="theme-logo mb-3 mt-3 mt-md-0">
                  <a href="/">
                    {
                      (config.logo || fixedSiteConfig.logo) && <ImageError width={300} height={300} src={config.logo || fixedSiteConfig.logo as string} className="lazyload h-55 w-100" alt={config?.name_1 || "Sản thương mại điện thử - Công ty Cổ phần HONEYNET"} />
                    }
                  </a>
                </div>
                <div className="footer-logo-contain mt-0">
                  {config?.description_1}
                  <ul className="address">
                    <li>
                      <a className="ms-0" href="#">{config?.address_1}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="footer-title">
                <h4>{fixedSiteConfig?.policies?.title}</h4>
              </div>
              <div className="footer-contain">
                <ul>
                  {
                    fixedSiteConfig?.policies?.items.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} className="text-content">{item.title}</a>
                      </li>
                    ))

                  }
                </ul>
              </div>
            </div>
            <div className="col-xl col-lg-4 col-sm-6">
              <div className="footer-title">
                <h4>{fixedSiteConfig?.support?.title}</h4>
              </div>
              <div className="footer-contain">
                <ul>

                  {
                    fixedSiteConfig?.support?.items.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} className="text-content">{item.title}</a>
                      </li>
                    ))
                  }

                </ul>
              </div>
            </div>
            <div className="ms-auto col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-title">
                <h4>Liên hệ</h4>
              </div>
              <div className="footer-contact">
                <ul>
                  <li>
                    <div className="footer-number">
                      <i className="far fa-phone"></i>
                      <div className="contact-number">
                        <span>Hotline:</span>
                        <span>{config?.phone}</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="footer-number">
                      <i className="far fa-envelope"></i>
                      <div className="contact-number">
                        <span>Email :</span>
                        <span><a href={`mailto:${config?.email}`}>{config?.email}</a></span>
                      </div>
                    </div>
                  </li>

                  <li className="social-app mb-0">
                    <h5 className="mb-2 text-content">Tải ứng dụng :</h5>
                    <ul>
                      <li className="mb-0">
                        <a href={config?.playstore_link} target="_blank" aria-label="playstore">
                          <ImageError width={300} height={300} src="/assets/eme2023/images/playstore.svg" className="lazyload" alt="playstore" />
                        </a>
                      </li>
                      <li className="mb-0">
                        <a href={config?.appstore_link} target="_blank" aria-label="appstore">
                          <ImageError width={300} height={300} src="/assets/eme2023/images/appstore.svg" className="lazyload" alt="appstore" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer section-small-space">
          <div className="reserve">
            <span className="text-content h6 mb-0">{config?.copyright_1}</span>
          </div>
          <div className="payment d-flex align-items-center justify-center">
            <ImageError unoptimized width={300} height={300} src="/assets/eme2023/images/payment/1.png" className="lazyload" alt="payment" />
          </div>
          <div className="social-link">
            <span className="text-content h6 me-2 mb-0">Liên kết :</span>
            <ul>

              {
                fixedSiteConfig?.socials?.map((social, index) => (
                  <li key={index}>
                    <a href={(config as Record<string, string | undefined>)[social.key]} target="_blank" rel="noopener noreferrer">
                      <div dangerouslySetInnerHTML={{ __html: social.icon }} />
                    </a>
                  </li>
                ))
              }

            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer