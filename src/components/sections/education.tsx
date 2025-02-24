import { Box, Card, Group, Text, Title } from '@mantine/core';
import { FormattedMessage } from 'react-intl';
import type { ResumeEducation } from '../../providers/data-provider';

export default function Education({
  education,
}: {
  education?: ResumeEducation[];
}) {
  // const intl = useIntl();
  // <h1>{intl.formatMessage({ id: 'test' })}</h1>

  return (
    <Card>
      <Title order={3}>
        <FormattedMessage
          defaultMessage="Education"
          id="components.section.education.card.title"
        />
      </Title>
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
