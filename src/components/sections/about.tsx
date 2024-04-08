import { Card, Text, Group, Title, ActionIcon, Stack } from '@mantine/core';
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandXing,
  IconPhoneCall,
  IconMail,
  IconWorld,
} from '@tabler/icons-react';
import type { PersonBasics } from '../../providers/data-provider';
import usePrintDetector from '../../hooks/use-print-detector';

export default function About({ basics }: { basics?: PersonBasics }) {
  const { isPrinting } = usePrintDetector();

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
          href={`${basics?.locationLink}`}
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
            c="teal"
          >
            <IconMail size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={`tel:${basics?.phone}`}
            target="_blank"
            variant="subtle"
            size="sm"
            c="teal"
          >
            <IconPhoneCall size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={basics?.linkedin}
            target="_blank"
            variant="subtle"
            size="sm"
            c="teal"
          >
            <IconBrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={basics?.github}
            target="_blank"
            variant="subtle"
            size="sm"
            c="teal"
          >
            <IconBrandGithubFilled size={18} />
          </ActionIcon>
          {basics?.xing && (
            <ActionIcon
              component="a"
              href={basics?.xing}
              target="_blank"
              variant="subtle"
              size="sm"
              c="teal"
            >
              <IconBrandXing size={18} />
            </ActionIcon>
          )}
        </Group>
      )}
    </Card>
  );
}
