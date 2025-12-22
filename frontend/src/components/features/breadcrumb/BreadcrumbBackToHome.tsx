
import Link from 'next/link';
import React from 'react'

interface BreadcrumbBackToHomeProps {
  title: string;
  current: string;
}

function BreadcrumbBackToHome({ title, current }: BreadcrumbBackToHomeProps) {
  return (
    <section className="breadscrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadscrumb-contain"
            >
              <h2 className="mb-2">{title}</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-light fa-house fs-6"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active"
                    style={{
                      fontWeight: 700
                    }}
                  >{current}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreadcrumbBackToHome