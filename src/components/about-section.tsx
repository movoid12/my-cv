import { Card, Text } from "@mantine/core";

export const AboutSection = ({ aboutText }: { aboutText: string }) => {
  console.log("bla");

  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Text fw={500} size="lg">
          About
        </Text>
      </Card.Section>
      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {aboutText}
      </Text>
    </Card>
  );
};
