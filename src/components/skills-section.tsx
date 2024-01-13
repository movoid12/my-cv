import { Badge, Card, Group, Space, Title } from "@mantine/core";

export const SkillsSection = ({ skills }: { skills?: string[] }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: 20 }}>
      <Title order={3}>Skills</Title>
      <Space h="md" />
      <Group gap="md">
        {skills?.map((skill, index) => (
          <Badge key={index} color="dark" variant="light">
            {skill}
          </Badge>
        ))}
      </Group>
    </Card>
  );
};
