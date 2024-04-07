import { Card, Text, Group, Title, ActionIcon, Stack } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandXing,
  IconPhoneCall,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";
import { type Basics } from "../../providers/data-provider";
import usePrintDetector from "../../hooks/use-print-detector";

export const AboutSection = ({ basics }: { basics?: Basics }) => {
  const [ isPrinting ] = usePrintDetector();

  return (
    <Card>
      <Stack>
        <Title order={3} fw="bold">
          {basics?.name}
        </Title>

        <Text size="sm">{basics?.label}</Text>
      </Stack>

      <Group gap="xs" mt="0.5em">
        <ActionIcon
          component="a"
          variant="transparent"
          color="gray"
          radius="xl"
          size="sm"
          href={`${basics?.location_link}`}
        >
          <IconWorld size={18} />
        </ActionIcon>

        <Text size="xs">{basics?.address}</Text>
      </Group>

      {!isPrinting && (
        <Group mt="1em">
          <ActionIcon
            component="a"
            href={`mailto:${basics?.email}`}
            target="_blank"
            variant="subtle"
            size="sm"
          >
            <IconMail size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={`tel:${basics?.phone}`}
            target="_blank"
            variant="subtle"
            size="sm"
          >
            <IconPhoneCall size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={basics?.linkedin}
            target="_blank"
            variant="subtle"
            size="sm"
          >
            <IconBrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={basics?.github}
            target="_blank"
            variant="subtle"
            size="sm"
          >
            <IconBrandGithubFilled size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={basics?.xing}
            target="_blank"
            variant="subtle"
            size="sm"
          >
            <IconBrandXing size={18} />
          </ActionIcon>
        </Group>
      )}
    </Card>
  );
};
