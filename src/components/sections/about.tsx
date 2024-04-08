import {
  ActionIcon,
  Avatar,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandXing,
  IconMail,
  IconPhoneCall,
  IconWorld,
} from '@tabler/icons-react';

import usePrintDetector from '../../hooks/use-print-detector';
import type { PersonBasics } from '../../providers/data-provider';

export default function About({ basics }: { basics?: PersonBasics }) {
  const { isPrinting } = usePrintDetector();

  return (
    <Card>
      <Stack>
        <Title order={3} fw="bold">
          {basics?.name}
        </Title>
        <Flex direction="row" gap={{ base: 'sm', sm: 'lg' }}>
          <Text size="sm">{basics?.label}</Text>
          <Avatar
            size="xl"
            src="https://avatars.githubusercontent.com/u/87415713?v=4"
          />
        </Flex>
      </Stack>

      <Group gap="xs" mt="0.5em">
        <ActionIcon
          component="a"
          variant="light"
          color="gray"
          size="sm"
          href={`${basics?.locationLink}`}
        >
          <IconWorld size={18} />
        </ActionIcon>
        <Text size="xs" fw="500">
          {basics?.address}
        </Text>
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
