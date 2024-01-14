import { Card, Group, Paper, Space, Stack, Text, Title } from "@mantine/core";

export const WorkExperienceSection = ({
  experiences,
}: {
  experiences?: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
  }[];
}) => {
  return (
    <Card>
      <Title order={3}>Work Experience</Title>
      <Space h="md" />
      {experiences?.map((experience, index) => (
        <Paper key={index}>
          <Group gap="xl" grow>
            <Text fw="bold">{experience.company}</Text>
            <Group justify="flex-end">
            <Text size="xs">
              {experience.startDate} - {experience.endDate}
            </Text>
            </Group>
          </Group>
          <Text>{experience.position}</Text>
        </Paper>
      ))}
    </Card>
  );
};
