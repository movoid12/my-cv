import { IconMoon, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Container,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import cx from 'clsx';
import classes from './main.module.css';

import About from '../components/sections/about';
import Education from '../components/sections/education';
import Experience from '../components/sections/experience';
import Language from '../components/sections/language';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import { usePortfolioData } from '../providers/data-provider';

export default function MainLayout() {
  const { data } = usePortfolioData();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Container size="md" pt={50}>
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
      <About basics={data?.basics} />
      <Experience experiences={data?.work} />
      <Education education={data?.education} />
      <Skills skills={data?.skills} />
      <Projects projects={data?.projects} />
      <Language langauges={data?.lang} />
    </Container>
  );
}
