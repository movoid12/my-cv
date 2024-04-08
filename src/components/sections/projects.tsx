import {
  Card,
  Image,
  Indicator,
  SimpleGrid,
  Space,
  Text,
  Title,
} from '@mantine/core';
import type { PersonProject } from '../../providers/data-provider';

export default function Projects({ projects }: { projects?: PersonProject[] }) {
  return (
    <Card>
      <Title order={3}>Projects</Title>
      <Space h="xl" />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {projects?.map((project) => (
          <Card
            withBorder
            radius="lg"
            shadow="md"
            component="a"
            href={project.projectUrl}
            target="_blank"
            key={project.id}
          >
            <Card.Section withBorder>
              <Image
                fit="cover"
                src={project.imageSrc}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                h={120}
                alt="No way!"
              />
            </Card.Section>

            <Text fw={500} size="md" mt="md" c="dark">
              <Indicator
                color={project.online ? 'green' : 'red'}
                position="middle-end"
                size={5}
                processing
              />
              {project.name}
            </Text>

            <Text mt="xs" c="dimmed" size="xs">
              {project.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
}
