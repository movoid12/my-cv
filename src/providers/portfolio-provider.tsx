import React, { createContext, useContext, useEffect, useState } from "react";

// Define types that match the structure of the provided JSON
type SocialLink = {
  linkedin: string;
  github: string;
  xing: string;
};

type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
} & SocialLink;

type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
};

type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
};

type Skill = {
  name: string;
  level: string;
  keywords: string[];
};

type ResumeData = {
  basics: Basics;
  education: Education[];
  work: WorkExperience[];
  skills: Skill[];
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

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/portfolio.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const responseBody = await response.text();
          console.error("Unexpected response:", responseBody);
          throw new Error(`Expected JSON, but received ${contentType}`);
        }
        const jsonData: ResumeData = await response.json();
        setData(jsonData);
      } catch (error: any) {
        console.error("Failed to load portfolio data", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
