import React, { createContext, useContext, useEffect, useState } from "react";

// Define types that match the structure of your resume JSON
type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
};

type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

type Skill = string;

type Project = {
  name: string;
  description: string;
};

type ResumeData = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  workExperience?: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};

interface PortfolioContextData {
  data: ResumeData | null;
  loading: boolean;
}

const PortfolioContext = createContext<PortfolioContextData>({
  data: null,
  loading: true,
});

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/assets/portfolio.json")
      .then((response) => response.json())
      .then((jsonData: ResumeData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load portfolio data", error);
        setLoading(false);
      });
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePortfolio = () => useContext(PortfolioContext);
