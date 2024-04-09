import { Card, SimpleGrid, Space, Text, Title } from '@mantine/core';
import type { PersonLanguage } from '../../providers/data-provider';

export default function Language({
  langauges,
}: {
  langauges?: PersonLanguage[];
}) {
  return (
    <Card>
      <Title order={3}>Langauges</Title>
      <Space h="md" />
      {/* <Stack align="flex-start" justify="flex-start" gap="xs"> */}
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {langauges?.map((lang) => (
          <div key={lang.id}>
            <Text fw="bold">{lang.name}</Text>
            <Text c="dimmed" fw={500} size="sm" fs="italic">
              {lang.level}
            </Text>
          </div>
        ))}
      </SimpleGrid>
    </Card>
  );
}
