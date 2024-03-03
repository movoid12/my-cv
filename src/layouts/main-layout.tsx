import { Card, Container } from "@mantine/core";

import EducationSection from "../components/sections/education-section";
import { WorkExperienceSection } from "../components/sections/work-exp-section";
import { SkillsSection } from "../components/sections/skills-section";
import { usePortfolioData } from "../providers/portfolio-provider";
import { AboutSection } from "../components/sections/about-section";

const MainLayout = () => {
  const { data } = usePortfolioData();
  return (
    <Container size="md">
      <AboutSection basics={data?.basics} />
      <Card withBorder>
      <WorkExperienceSection experiences={data?.work} />
      <EducationSection education={data?.education} />
      <SkillsSection skills={data?.skills} />
      </Card>
    </Container>
  );
};

export default MainLayout;
