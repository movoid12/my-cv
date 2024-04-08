import { Card, Group, Paper, Space, Text, Title } from '@mantine/core';
import type { PersonExperience } from '../../providers/data-provider';

export default function Experience({
  experiences,
}: {
  experiences?: PersonExperience[];
}) {
  return (
    <Card>
      <Title order={3}>Work Experience</Title>
      <Space h="md" />
      {experiences?.map((exp) => (
        <Paper key={exp.id} mt="sm" mb="sm">
          <Group gap="xl" grow>
            <Text fw="bold">{exp.company}</Text>
            <Group justify="flex-end">
              <Text size="xs" fw="500">
                {exp.startDate} - {exp.endDate}
              </Text>
            </Group>
          </Group>
          <Text>{exp.position}</Text>
          <Text c="dimmed" fw={500} size="sm" fs="italic">
            {exp.summary}
          </Text>
          <Text c="teal" fw={500} size="sm" fs="italic">
            {exp.location}
          </Text>
        </Paper>
      ))}
    </Card>
  );
}
