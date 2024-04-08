import { Badge, Card, Group, Space, Title } from '@mantine/core';
import type { PersonSkill } from '../../providers/data-provider';

export const Skills = ({ skills }: { skills?: PersonSkill[] }) => {
  return (
    <Card>
      <Title order={3}>Skills</Title>
      <Space h="md" />
      <Group gap="xs" wrap="wrap">
        {skills?.map((skill, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Badge key={index} color="dark" variant="light">
            {skill}
          </Badge>
        ))}
      </Group>
    </Card>
  );
};
