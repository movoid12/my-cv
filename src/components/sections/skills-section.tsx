import { Badge, Card, Group, Space, Title, Text } from "@mantine/core";




export const SkillsSection = ({ skills }: { skills?: Skill[] }) => {
  return (
    <Card >
      <Title order={3}>Skills</Title>
      <Space h="md" />
      {skills?.map((skill, index) => (
        <div key={index}>
          <Text size="sm" style={{ marginBottom: 10 }}>
          ✦ {skill.name} ({skill.level})
          </Text>
          <Group gap="xs">
            {skill.keywords.map((keyword, keywordIndex) => (
              <Badge key={keywordIndex} color="dark" variant="light">
                {keyword}
              </Badge>
            ))}
          </Group>
          <Space h="md" />
        </div>
      ))}
    </Card>
  );
};
