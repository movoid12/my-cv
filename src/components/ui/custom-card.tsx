import { Card, Image, Indicator, Text } from '@mantine/core';
import usePrintDetector from '../../hooks/use-print-detector';

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
  const { isPrinting } = usePrintDetector();

  return (
    <Card
      withBorder
      radius="lg"
      shadow="md"
      component="a"
      href={projectUrl}
      target="_blank"
    >
      {!isPrinting && (
        <Card.Section withBorder>
          <Image src={imageSrc} h={120} alt="card of content of the project" />
        </Card.Section>
      )}

      <Text fw={500} size="md" mt="md">
        {name}
      </Text>
      <Indicator color={isActive ? 'green' : 'red'} size="7" zIndex="0" />
      <Text mt="xs" c="dimmed" size="xs">
        {description}
      </Text>
    </Card>
  );
}
