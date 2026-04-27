import { useEffect } from 'react';

const SCROLL_KEY = 'scroll:home';

export function saveHomeScroll(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
}

export function useRestoreHomeScroll(): void {
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (!saved) return;
    sessionStorage.removeItem(SCROLL_KEY);
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, Number(saved));
    document.documentElement.style.scrollBehavior = '';
  }, []);
}
