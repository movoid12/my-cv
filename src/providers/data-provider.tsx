import React, { createContext, useContext} from "react";
import useSWRImmutable from "swr/immutable";

type SocialLink = {
  linkedin: string;
  github: string;
  xing: string;
};

export type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  location_link: string;
} & SocialLink;

export type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  location: string;
};

export type Skill = string[];

type ResumeData = {
  basics: Basics;
  education: Education[];
  work: WorkExperience[];
  skills: Skill;
};

interface PortfolioContextData {
  data: ResumeData | null;
  loading: boolean;
  error: string | null;
}

const PortfolioContext = createContext<PortfolioContextData>({
  data: null,
  loading: true,
  error: null,
});

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWRImmutable("http://localhost:5173/assets/portfolio.json", fetcher, {
    suspense: true,
    revalidateOnFocus: true,
  });

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioData = () => useContext(PortfolioContext);
