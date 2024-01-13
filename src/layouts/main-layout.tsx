import { Grid, Stack } from "@mantine/core";

import { SocialMedia } from "../components/social-media-section";
import EducationSection from "../components/education-section";
import { WorkExperienceSection } from "../components/work-exp-section";
import { SkillsSection } from "../components/skills-section";
import { ProjectsSection } from "../components/projects-section";
import { usePortfolio } from "../providers/portfolio-provider";

const MainLayout = () => {
  const { data } = usePortfolio();
  return (
    <Stack>
      <SocialMedia />
      <WorkExperienceSection experiences={data?.workExperience} />
      <EducationSection education={data?.education} />
      <SkillsSection skills={data?.skills} />
      <ProjectsSection projects={data?.projects} />
    </Stack>
  );
};

export default MainLayout;
