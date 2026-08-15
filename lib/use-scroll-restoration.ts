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

    // Always clear — we don't want a stale value on the next visit
    sessionStorage.removeItem(SCROLL_KEY);

    // If the URL has a hash (e.g. /#experience from a nav link), the browser
    // will scroll to that anchor automatically. Don't fight it.
    if (window.location.hash) return;

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, Number(saved));
    document.documentElement.style.scrollBehavior = '';
  }, []);
}
