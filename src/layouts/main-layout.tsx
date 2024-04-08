import { Container } from '@mantine/core';

import About from '../components/sections/about';
import Education from '../components/sections/education';
import Experience from '../components/sections/experience';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import { usePortfolioData } from '../providers/data-provider';

export default function MainLayout() {
  const { data } = usePortfolioData();

  return (
    <Container size="sm" pt={50}>
      <About basics={data?.basics} />
      <Experience experiences={data?.work} />
      <Education education={data?.education} />
      <Skills skills={data?.skills} />
      <Projects projects={data?.projects} />
    </Container>
  );
}
