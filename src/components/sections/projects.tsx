import { Card, SimpleGrid, Space, Title } from '@mantine/core';
import type { PersonProject } from '../../providers/data-provider';
import CustomCard from '../ui/custom-card';

export default function Projects({ projects }: { projects?: PersonProject[] }) {
  return (
    <Card>
      <Title order={3}>Projects</Title>
      <Space h="xl" />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {projects?.map((project) => (
          <CustomCard
            projectKey={project.id}
            name={project.name}
            description={project.description}
            imageSrc={project.imageSrc}
            projectUrl={project.projectUrl}
            isActive={project.online}
          />
        ))}
      </SimpleGrid>
    </Card>
  );
}
