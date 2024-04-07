import { Badge, Card, Group, Space, Title } from "@mantine/core";
import { Skill } from "../../providers/data-provider";

export const Skills = ({ skills }: { skills?: Skill[] }) => {
  return (
    <Card>
      <Title order={3}>Skills</Title>
      <Space h="md" />
      <Group gap="xs" wrap="wrap">
        {skills?.map((skill, index) => (
          <Badge key={index} color="dark" variant="light">
            {skill}
          </Badge>
        ))}
      </Group>
    </Card>
  );
};
