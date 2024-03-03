import { Card, Text, Group, Button, Title } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandXing,
} from "@tabler/icons-react";
import { type Basics } from "../../providers/portfolio-provider";

export const AboutSection = ({ basics }: { basics?: Basics }) => {
  return (
    <Card withBorder>
      <Title order={3} fw="bold">
        About
      </Title>
      <Text size="lg">{basics?.name}</Text>
      <Text size="sm">{basics?.label}</Text>
      <Group style={{ marginTop: "1em" }}>
        <Title size="sm">Email:</Title>
        <Text>{basics?.email}</Text>
      </Group>
      <Text size="sm" style={{ lineHeight: 1.5 }}>
        Phone: {basics?.phone}
      </Text>
      <Group style={{ marginTop: "1em" }}>
        <Button
          component="a"
          href={basics?.linkedin}
          target="_blank"
          variant="subtle"
        >
          <IconBrandLinkedin size={18} />
        </Button>
        <Button
          component="a"
          href={basics?.github}
          target="_blank"
          variant="subtle"
        >
          <IconBrandGithubFilled size={18} />
        </Button>
        <Button
          component="a"
          href={basics?.xing}
          target="_blank"
          variant="subtle"
        >
          <IconBrandXing size={18} />
        </Button>
      </Group>
    </Card>
  );
};
