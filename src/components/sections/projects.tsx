import { Card, SimpleGrid, Space, Title } from '@mantine/core';
import { FormattedMessage } from 'react-intl';
import type { ResumeProject } from '../../providers/data-provider';
import CustomCard from '../ui/custom-card';

export default function Projects({ projects }: { projects?: ResumeProject[] }) {
  return (
    <Card>
      <Title order={3}>
        <FormattedMessage
          defaultMessage="Projects"
          id="components.section.projects.card.title"
        />
      </Title>
      <Space h="xl" />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {projects?.map((project) => (
          <CustomCard
            key={project.id}
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
