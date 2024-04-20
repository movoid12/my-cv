import { AppShell, Burger, Container, Group } from '@mantine/core';

import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import Language from '@/components/sections/language';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import ColorSchemeButton from '@/components/ui/color-scheme-button';
import usePrintDetector from '@/hooks/use-print-detector';
import { usePortfolioData } from '@/providers/data-provider';
import { useDisclosure } from '@mantine/hooks';

export default function MainLayout() {
  const { data } = usePortfolioData();

  const { isPrinting } = usePrintDetector();

  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      {!isPrinting && (
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group ml="xl" gap={0} visibleFrom="sm">
                <ColorSchemeButton />
              </Group>
            </Group>
          </Group>
        </AppShell.Header>
      )}

      <AppShell.Navbar py="md" px={4}>
        <ColorSchemeButton />
      </AppShell.Navbar>

      <Container size="md" pt={50}>
        <About basics={data?.basics} />
        <Experience experiences={data?.work} />
        <Education education={data?.education} />
        <Skills skills={data?.skills} />
        <Projects projects={data?.projects} />
        <Language langauges={data?.lang} />
      </Container>
    </AppShell>
  );
}
