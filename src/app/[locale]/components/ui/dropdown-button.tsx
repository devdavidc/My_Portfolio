'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

type Language = {
  code: 'en' | 'es';
  label: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

interface LanguageDropdownProps {
  value: Language['code'];
  className?: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ value, className }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // ⬅️ Ref al contenedor

  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (lang: Language['code']) => {
    setOpen(false);
    router.replace(`/${lang}${pathname.replace(/^\/(en|es)/, '')}`);
  };

  const currentLang = languages.find((l) => l.code === value);

  // 🔐 Cierre automático al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1.5 text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-muted/30 dark:hover:bg-muted/40 rounded-md transition"
      >
        <span className="text-neutral-300 sm:inline uppercase">{currentLang?.code}</span>
        <span className="text-base">{currentLang?.flag}</span>
        <IconChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>

      {open && (
        <ul className="absolute mt-2 w-full min-w-[120px] rounded-md bg-white dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-neutral-700 z-50">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={cn(
                  "flex items-center w-full px-4 py-2 text-sm gap-2 hover:bg-gray-100 dark:hover:bg-neutral-800 transition",
                  value === lang.code
                    ? "bg-gray-100 dark:bg-neutral-800 font-semibold"
                    : ""
                )}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="text-gray-800 dark:text-gray-100">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
