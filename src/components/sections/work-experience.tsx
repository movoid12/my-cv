import { Card, Group, Paper, Space, Text, Title } from "@mantine/core";

export default function WorkExperience({
  experiences,
}: {
  experiences?: {
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    summary?: string;
    location?: string;
  }[];
}) {
  return (
    <Card>
      <Title order={3}>Work Experience</Title>
      <Space h="md" />
      {experiences?.map((exp, index) => (
        <Paper key={index} mt="sm" mb="sm">
          <Group gap="xl" grow>
            <Text fw="bold">{exp.company}</Text>
            <Group justify="flex-end">
              <Text size="xs">
                {exp.startDate} - {exp.endDate}
              </Text>
            </Group>
          </Group>
          <Text>{exp.position}</Text>
          <Text c="dimmed" fw={500} size="sm" fs="italic">{exp.summary}</Text>
          <Text c="teal" fw={500} size="sm" fs="italic">{exp.location}</Text>
        </Paper>
      ))}
    </Card>
  );
}
