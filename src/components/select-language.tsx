import { type ComboboxData, Select } from '@mantine/core';

import { IconLanguage } from '@tabler/icons-react';
import { useLocale } from '../hooks/use-locale';
import { SUPPORTED_LOCALES } from '../utils/locales';

export default function SelectLangauge() {
  const { locale, setLocale } = useLocale();

  const languageIcon = <IconLanguage stroke={2} color="#5765F2" />;

  const options: ComboboxData = SUPPORTED_LOCALES.map((locale) => ({
    value: locale,
    label: locale.toUpperCase(),
  }));

  return (
    <Select
      data={options}
      value={locale}
      onChange={(_value, option) => {
        if (option) {
          setLocale(option.value);
        }
      }}
      size="sm"
      maw={42}
      radius="xl"
      checkIconPosition="right"
      rightSection={languageIcon}
      comboboxProps={{ width: 80, position: 'bottom-start' }}
    />
  );
}
