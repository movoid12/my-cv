import { Card, Group, Paper, Text, Title } from '@mantine/core';
import type { PersonEducation } from '../../providers/data-provider';

export default function Education({
  education,
}: {
  education?: PersonEducation[];
}) {
  return (
    <Card>
      <Title order={3}>Education</Title>
      {education?.map((edu) => (
        <Paper key={edu.id} mt="sm" mb="sm">
          <Group gap="xl" grow>
            <Text fw="bold">{edu.institution}</Text>
            <Group justify="flex-end">
              <Text size="xs" fw="500">
                {edu.startDate} - {edu.endDate}
              </Text>
            </Group>
          </Group>
          <Text>{edu.area}</Text>
          <Text c="dimmed" fw={500} size="sm" fs="italic">
            {edu.studyType}
          </Text>
        </Paper>
      ))}
    </Card>
  );
}
