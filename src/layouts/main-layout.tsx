import { Container } from "@mantine/core";

import Education from "../components/sections/education";
import WorkExperience from "../components/sections/work-experience";
import { Skills } from "../components/sections/skills";
import { usePortfolioData } from "../providers/data-provider";
import { About } from "../components/sections/about";

const MainLayout = () => {
  const { data } = usePortfolioData();
  return (
    <Container size="sm" pt={50}>
      <About basics={data?.basics} />
      <WorkExperience experiences={data?.work} />
      <Education education={data?.education} />
      <Skills skills={data?.skills} />
    </Container>
  );
};

export default MainLayout;
