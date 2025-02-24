import { Badge, Card, Group, Space, Title } from '@mantine/core';
import { FormattedMessage } from 'react-intl';
import type { ResumeSkill } from '../../providers/data-provider';

export default function Skills({ skills }: { skills?: ResumeSkill[] }) {
  return (
    <Card>
      <Title order={3}>
        <FormattedMessage
          defaultMessage="Skills"
          id="components.section.skills.card.title"
        />
      </Title>
      <Space h="md" />
      <Group gap="xs" wrap="wrap">
        {skills?.map((skill, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Badge key={index} color="dark">
            {skill}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
