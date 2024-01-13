import { Card, Group, Space, Text, Title } from "@mantine/core";

export const ProjectsSection = ({
  projects,
}: {
  projects: { name: string; description: string }[];
}) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: 20 }}>
      <Title order={3}>Projects</Title>
      <Space h="md" />
      {projects.map((project, index) => (
        <Group key={index} gap="lg">
          <Text fw={500}>{project.name}</Text>
          <Text size="sm">{project.description}</Text>
        </Group>
      ))}
    </Card>
  );
};
