import { Box, Card, Group, Text, Title } from '@mantine/core';
import type { ResumeExperience } from '@/providers/data-provider';

export default function Experience({
  experiences,
}: {
  experiences?: ResumeExperience[];
}) {
  return (
    <Card>
      <Title order={3}>Work Experience</Title>
      {experiences?.map((exp) => (
        <Box key={exp.id} pt="md">
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
          <Text c="teal" fw={500} size="xs">
            {exp.location}
          </Text>
        </Box>
      ))}
    </Card>
  );
}
