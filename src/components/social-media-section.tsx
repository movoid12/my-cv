import { Paper, Grid, Text, Anchor } from "@mantine/core";
import { BrandLinkedin, BrandGithub, BrandXing } from "@tabler/icons";
import { usePortfolio } from "../providers/portfolio-provider";

export const SocialMedia = () => {
  const { data } = usePortfolio();

  const socialMediaLinks = [
    { name: "LinkedIn", icon: <BrandLinkedin size={18} />, url: data.linkedin },
    { name: "GitHub", icon: <BrandGithub size={18} />, url: data.github },
    { name: "Xing", icon: <BrandXing size={18} />, url: data.xing },
  ];

  return (
    <Grid>
      <Paper shadow="xs">
        <Text fw={700}>Find me on</Text>
        {socialMediaLinks.map((link, index) => (
          <Text key={index}>
            <Anchor href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon} {link.name}
            </Anchor>
          </Text>
        ))}
      </Paper>
    </Grid>
  );
};
