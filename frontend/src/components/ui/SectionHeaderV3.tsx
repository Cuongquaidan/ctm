"use client"
import React, { useEffect, useState } from 'react'
import { CategoryTV0 } from '@/types/common.types';
import { useRouter, useSearchParams } from 'next/navigation';

interface SectionHeaderV3Props {
  title?: string;
  description?: string;
  hasIcon?: boolean;
  categories?: CategoryTV0[]
  hasUnderline?: boolean;
}



function SectionHeaderV3({ title, description, hasIcon = false, categories = [], hasUnderline = false }: SectionHeaderV3Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'all';

  const handleTabClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (slug === 'all') {
      params.delete('tab');
    } else {
      params.set('tab', slug);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="title title-flex wow fadeIn">
      <div>
        {title && <h2>
          {title}
        </h2>}

        {hasIcon && (
          <span className="title-leaf">
            <svg className="icon-width">
              <use xlinkHref="/assets/eme2023/svg/leaf.svg#leaf"></use>
            </svg>
          </span>)}
        {hasUnderline && <span className="title-leaf" />}

        {description && (
          <p className='d-none d-lg-block'>
            {description}
          </p>
        )}
      </div>
      {categories.length > 0 && (
        <ul className="nav nav-tabs tab-style-color-2 tab-style-color mt-1" id="myTab">
          <li className="nav-item">
            <button
              className={`nav-link btn ${currentTab === 'all' ? 'active' : ''}`}
              id="all-tab"
              onClick={() => handleTabClick('all')}
              type="button"
            >
              All
            </button>
          </li>

          {categories.map((category) => (
            <li className="nav-item" key={category.slug}>
              <button
                className={`nav-link btn ${currentTab === category.slug ? 'active' : ''}`}
                id={`${category.slug}-tab`}
                onClick={() => handleTabClick(category.slug)}
                type="button"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SectionHeaderV3