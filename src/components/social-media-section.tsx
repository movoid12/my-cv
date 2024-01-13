import { Paper, Grid, Text, Anchor, Box, Group } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandXing,
} from "@tabler/icons-react";
import { usePortfolio } from "../providers/portfolio-provider";

export const SocialMedia = () => {
  const { data } = usePortfolio();

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin size={18} />,
      url: data?.socialLinks,
    },
    {
      name: "GitHub",
      icon: <IconBrandGithubFilled size={18} />,
      url: data?.socialLinks,
    },
    { name: "Xing", icon: <IconBrandXing size={18} />, url: data?.socialLinks },
  ];

  return (
    <Box>
      <Paper shadow="xs">
        <Text fw={700}>Find me on</Text>
        <Group>
          {socialMediaLinks?.map((link, index) => (
            <Text key={index}>
              <Anchor href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon} 
              </Anchor>
            </Text>
          ))}
        </Group>
      </Paper>
    </Box>
  );
};
