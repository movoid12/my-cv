import type { ResumeEducation } from '@/providers/data-provider';
import { Box, Card, Group, Text, Title } from '@mantine/core';

export default function Education({
  education,
}: {
  education?: ResumeEducation[];
}) {
  return (
    <Card>
      <Title order={3}>Education</Title>
      {education?.map((edu) => (
        <Box key={edu.id} pt="md">
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
        </Box>
      ))}
    </Card>
  );
}
