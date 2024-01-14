import { Card, Text, Group, Button, Title } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandXing,
} from "@tabler/icons-react";

type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  xing: string;
};

export const AboutSection = ({ basics }: { basics?: Basics }) => {
  return (
    <Card>
      <Title order={3} fw="bold">
        About
      </Title>
      <Text size="lg">{basics?.name}</Text>
      <Text size="sm">{basics?.label}</Text>

      <Text size="sm" style={{ lineHeight: 1.5, marginTop: "1em" }}>
        Email: {basics?.email}
      </Text>
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
