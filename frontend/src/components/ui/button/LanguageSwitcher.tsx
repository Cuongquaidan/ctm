

'use client';

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';
import { Locale } from '@/i18n/routing';
import { useEffect, useState, useTransition } from 'react';

// ============================================================================
// LANGUAGES CONFIG
// ============================================================================
const languages = [
  { code: 'vi' as Locale, name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
];

// ============================================================================
// LANGUAGE SWITCHER COMPONENT (CUSTOM DROPDOWN VERSION)
// ============================================================================
export default function LanguageSwitcher() {
  // --------------------------------------------------------------------------
  // STATE & HOOKS
  // --------------------------------------------------------------------------

  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as Locale;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // --------------------------------------------------------------------------
  // CHANGE LANGUAGE HANDLER
  // --------------------------------------------------------------------------
  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    startTransition(() => {
      router.replace(pathname as any, { locale: newLocale, scroll: false });
    });
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  // --------------------------------------------------------------------------
  // RENDER - CUSTOM DROPDOWN UI
  // --------------------------------------------------------------------------
  return (
    <div className="language-switcher position-relative">
      {/* Button trigger */}
      <button
        type="button"
        onClick={() => !isPending && setIsOpen(!isOpen)}
        disabled={isPending}
        className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-light border border-secondary-subtle"
        style={{
          transition: 'all 0.3s ease',
          opacity: isPending ? 0.7 : 1,
          cursor: isPending ? 'wait' : 'pointer',
        }}
      >
        {/* Icon globe */}
        <i className="fas fa-globe-americas text-primary" style={{ fontSize: '1.1rem' }}></i>

        {/* Current language */}
        <span className="fw-semibold text-dark" style={{ fontSize: '0.9rem' }}>
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>

        {/* Arrow down */}
        <i
          className={`fas fa-chevron-down text-secondary transition-all`}
          style={{
            fontSize: '0.7rem',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        ></i>
      </button>

      {/* Loading spinner bên cạnh */}
      {isPending && (
        <div
          className="position-absolute d-flex align-items-center"
          style={{
            top: '50%',
            right: '-35px',
            transform: 'translateY(-50%)'
          }}
        >
          <div className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Custom dropdown menu */}
      {isOpen && !isPending && (
        <div
          className="position-absolute w-full bg-white border rounded-3 shadow-lg overflow-hidden"
          style={{
            top: 'calc(100% + 8px)',
            left: '0',
            zIndex: 1000,
            animation: 'slideDown 0.2s ease'
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`
                w-full d-flex align-items-center gap-3 px-2 py-1 border-0 bg-transparent text-start
                ${currentLocale === lang.code ? 'bg-primary-subtle' : ''}
              `}
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '1px solid #f0f0f0',
              }}
              onMouseEnter={(e) => {
                if (currentLocale !== lang.code) {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }
              }}
              onMouseLeave={(e) => {
                if (currentLocale !== lang.code) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {/* Flag */}
              <span style={{ fontSize: '14px' }}>{lang.flag}</span>

              {/* Language info */}
              <div className="flex-grow-1">
                <small className="text-muted">{lang.code.toUpperCase()}</small>
              </div>

              {/* Check icon for current language */}
              {currentLocale === lang.code && (
                <i className="fas fa-check text-primary"></i>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

