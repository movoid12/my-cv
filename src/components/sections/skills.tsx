import type { ResumeSkill } from '@/providers/data-provider';
import { Badge, Card, Group, Space, Title } from '@mantine/core';

export default function Skills({ skills }: { skills?: ResumeSkill[] }) {
  return (
    <Card>
      <Title order={3}>Skills</Title>
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
