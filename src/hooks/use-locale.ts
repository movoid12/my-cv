import { useCallback, useEffect, useState } from 'react';

let defaultBrowserLocale = navigator.language.slice(0, 2);
const listeners = new Set<(locale: string) => void>();

export const useLocale = () => {
  const [locale, setLocaleState] = useState<string>(defaultBrowserLocale);

  const setLocale = useCallback((newLocale: string) => {
    defaultBrowserLocale = newLocale;

    for (const listener of listeners) {
      listener(newLocale);
    }
  }, []);

  useEffect(() => {
    const listener = (newLocale: string) => setLocaleState(newLocale);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return { locale, setLocale };
};
