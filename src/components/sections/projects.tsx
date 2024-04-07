import { Card, Group, Space, Text, Title } from "@mantine/core";
import { Project } from "../../providers/data-provider";

export const Projects = ({ projects }: { projects?: Project[] }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: 20 }}>
      <Title order={3}>Projects</Title>
      <Space h="md" />
      {projects?.map((project, index) => (
        <Group key={index} gap="lg">
          <Text fw={500}>{project.name}</Text>
          <Text size="sm">{project.description}</Text>
        </Group>
      ))}
    </Card>
  );
};
