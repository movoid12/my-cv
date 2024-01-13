import { Card, Group, Text } from "@mantine/core";

interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  education?: Education[];
}

const EducationSection: React.FC<EducationProps> = ({ education }) => {
  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Text size="lg">Education</Text>
      </Card.Section>
      {education?.map((edu, index) => (
        <Group key={index}>
          <Text>{edu.degree}</Text>
          <Text size="sm">{edu.institution}</Text>
          <Text size="xs">
            {edu.startDate} - {edu.endDate}
          </Text>
        </Group>
      ))}
    </Card>
  );
};

export default EducationSection;
