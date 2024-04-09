import { Card, Image, Indicator, Text } from '@mantine/core';

export default function CustomCard({
  projectUrl,
  imageSrc,
  isActive,
  name,
  description,
}: {
  projectUrl?: string;
  imageSrc?: string;
  isActive?: boolean;
  name: string;
  description: string;
}) {
  //   <AppShell
  //   header={{ height: 60 }}
  //   navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
  //   padding="md"
  // >
  return (
    <Card
      withBorder
      radius="lg"
      shadow="md"
      component="a"
      href={projectUrl}
      target="_blank"
    >
      <Card.Section withBorder>
        <Image
          fit="scale-down"
          src={imageSrc}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          h={120}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="md" mt="md" c="dark">
        {name}
      </Text>
      <Indicator
        color={isActive ? 'green' : 'red'}
        position="top-end"
        size="7"
      />
      <Text mt="xs" c="dimmed" size="xs">
        {description}
      </Text>
    </Card>
  );
}
