import { Select, type ComboboxData } from '@mantine/core';

import { useLocale } from '../hooks/use-locale';
import { SUPPORTED_LOCALES } from '../utils/locales';
import { IconLanguage } from '@tabler/icons-react';
/* 
type LocaleOption = {
  value: SupportedLocale;
}; */

export default function SelectLangauge() {
  const { locale, setLocale } = useLocale();

  const languageIcon = <IconLanguage stroke={1.25} local="en"/>;


  const options: ComboboxData = SUPPORTED_LOCALES.map((locale) => ({
    value: locale,
    label: locale.toUpperCase(),
    }));

  return (
    <Select
      data={options}
      value={locale}
      rightSection={languageIcon}
      rightSectionPointerEvents="none"
      onChange={(_value, option) => setLocale(option.value)}
      size="sm"
      maw={42}


      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
