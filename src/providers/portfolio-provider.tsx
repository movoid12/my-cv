// src/providers/PortfolioProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface PortfolioContextData {
  data: unknown;
  loading: boolean;
}

const PortfolioContext = createContext<PortfolioContextData>({
  data: null,
  loading: true,
});

export const PortfolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/assets/portfolio.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
