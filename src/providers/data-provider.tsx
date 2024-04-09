import type React from 'react';
import { createContext, useContext } from 'react';
// biome-ignore lint/style/useNamingConvention: <explanation>
import useSWRImmutable from 'swr/immutable';

type SocialLink = {
  linkedin: string;
  github: string;
  xing?: string;
};

export type PersonBasics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  locationLink: string;
} & SocialLink;

export type PersonEducation = {
  id: number;
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
};

export type PersonExperience = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  location: string;
};

export type PersonSkill = string[];

export type PersonProject = {
  id: number;
  name: string;
  description: string;
  projectUrl: string;
  imageSrc: string;
  online: boolean;
};

export type PersonLanguage = {
  id: number;
  name: string;
  level: string;
};

type ResumeData = {
  basics: PersonBasics;
  education: PersonEducation[];
  lang: PersonLanguage[];
  projects: PersonProject[];
  skills: PersonSkill[];
  work: PersonExperience[];
};

type PortfolioContextData = {
  data: ResumeData | null;
  loading: boolean;
  error: string | null;
};

const PortfolioContext = createContext<PortfolioContextData>({
  data: null,
  loading: true,
  error: null,
});
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export function DataProvider({ children }: { children: React.ReactNode }) {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWRImmutable('http://localhost:5173/assets/portfolio.json', fetcher, {
    suspense: true,
  });

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolioData = () => useContext(PortfolioContext);
