import { Container, Stack } from "@mantine/core";

import EducationSection from "../components/education-section";
import { WorkExperienceSection } from "../components/work-exp-section";
import { SkillsSection } from "../components/skills-section";
import { usePortfolio } from "../providers/portfolio-provider";
import { AboutSection } from "../components/about-section";

const MainLayout = () => {
  const { data } = usePortfolio();
  return (
    <Container size="md">
      <AboutSection basics={data?.basics} />
      <WorkExperienceSection experiences={data?.work} />
      <EducationSection education={data?.education} />
      <SkillsSection skills={data?.skills} />
    </Container>
  );
};

export default MainLayout;
