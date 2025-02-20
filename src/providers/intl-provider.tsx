import { IntlProvider as Provider } from 'react-intl';

import de from '../messages/de.json';
import en from '../messages/en.json';
import { DEFAULT_LOCALE } from '../utils/locales';
import { useLocale } from '../hooks/use-locale';

const messages: Record<string, Record<string, string>> = { de, en };

export default function IntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /*  const [locale, setLocale] = useState('');

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const userOsDeafultLangauge = navigator.language.slice(0, 2);

    setLocale(userOsDeafultLangauge);
  }, [setLocale]);
   */

  const { locale } = useLocale();

  const language = locale in messages ? locale : DEFAULT_LOCALE;

  return (
    <Provider
      messages={messages[language]}
      locale={language}
      defaultLocale={DEFAULT_LOCALE}
    >
      {children}
    </Provider>
  );
}
