import { Container } from "@mantine/core";

import EducationSection from "../components/sections/education-section";
import { WorkExperienceSection } from "../components/sections/work-exp-section";
import { SkillsSection } from "../components/sections/skills-section";
import { usePortfolioData } from "../providers/data-provider";
import { AboutSection } from "../components/sections/about-section";

const MainLayout = () => {
  const { data } = usePortfolioData();
  return (
    <Container size="sm" pt={50}>
      <AboutSection basics={data?.basics} />
      <WorkExperienceSection experiences={data?.work} />
      <EducationSection education={data?.education} />
      <SkillsSection skills={data?.skills} />
    </Container>
  );
};

export default MainLayout;
