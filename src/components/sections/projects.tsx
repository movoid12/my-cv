import { Card, Group, Space, Text, Title } from '@mantine/core';
import type { PersonProject } from '../../providers/data-provider';

export const Projects = ({ projects }: { projects?: PersonProject[] }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: 20 }}>
      <Title order={3}>Projects</Title>
      <Space h="md" />
      {projects?.map((project) => (
        <Group key={project.id} gap="lg">
          <Text fw={500}>{project.name}</Text>
          <Text size="sm">{project.description}</Text>
        </Group>
      ))}
    </Card>
  );
};
