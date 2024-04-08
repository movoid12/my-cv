import { Card, Image, Indicator, Text } from '@mantine/core';

export default function CustomCard({
  projectKey,
  projectUrl,
  imageSrc,
  isActive,
  name,
  description,
}: {
  projectKey: number;
  projectUrl?: string;
  imageSrc?: string;
  isActive?: boolean;
  name: string;
  description: string;
}) {
  return (
    <Card
      withBorder
      radius="lg"
      shadow="md"
      component="a"
      href={projectUrl}
      target="_blank"
      key={projectKey}
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
        <Indicator
          color={isActive ? 'green' : 'red'}
          position="middle-end"
          size={5}
        />
        {name}
      </Text>

      <Text mt="xs" c="dimmed" size="xs">
        {description}
      </Text>
    </Card>
  );
}
