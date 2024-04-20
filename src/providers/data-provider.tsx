import type React from 'react';
import { createContext, useContext } from 'react';
// biome-ignore lint/style/useNamingConvention: <explanation>
import useSWRImmutable from 'swr/immutable';

type SocialLink = {
  linkedin: string;
  github: string;
  xing?: string;
};

export type ResumeBasics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  locationLink: string;
} & SocialLink;

export type ResumeEducation = {
  id: number;
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
};

export type ResumeExperience = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  location: string;
};

export type ResumeSkill = string[];

export type ResumeProject = {
  id: number;
  name: string;
  description: string;
  projectUrl: string;
  imageSrc: string;
  online: boolean;
};

export type ResumeLanguage = {
  id: number;
  name: string;
  level: string;
};

type ResumeData = {
  basics: ResumeBasics;
  education: ResumeEducation[];
  lang: ResumeLanguage[];
  projects: ResumeProject[];
  skills: ResumeSkill[];
  work: ResumeExperience[];
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
