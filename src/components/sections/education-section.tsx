import { Card, Group, Paper, Space, Text, Title } from "@mantine/core";

const EducationSection = ({
  education,
}: {
  education?: {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
  }[];
}) => {
  return (
    <Card>
      <Title order={3}>Education</Title>
      <Space h="md" />
      {education?.map((edu, index) => (
        <Paper key={index} mt="sm" mb="sm">
          <Group gap="xl" grow>
            <Text fw="bold">{edu.institution}</Text>
            <Group justify="flex-end">
              <Text size="xs">
                {edu.startDate} - {edu.endDate}
              </Text>
            </Group>
          </Group>
          <Text >{edu.area}</Text>
          <Text c="dimmed" fw={500} size="sm" fs="italic">{edu.studyType}</Text>
        </Paper>
      ))}
    </Card>
  );
};

export default EducationSection;
