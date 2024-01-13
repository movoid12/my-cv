import { Card, Space, Stack, Text, Title } from "@mantine/core";

export const WorkExperienceSection = ({
  experiences,
}: {
  experiences?: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
  }[];
}) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: 20 }}>
      <Title order={3}>Work Experience</Title>
      <Space h="md" />
      {experiences?.map((experience, index) => (
        <Stack
          key={index}
          h={300}
          bg="var(--mantine-color-body)"
          align="flex-start"
          justify="space-around"
        >
          <Text fw={500}>{experience.position}</Text>
          <Text size="sm">{experience.company}</Text>
          <Text size="xs">
            {experience.startDate} - {experience.endDate}
          </Text>
        </Stack>
      ))}
    </Card>
  );
};
