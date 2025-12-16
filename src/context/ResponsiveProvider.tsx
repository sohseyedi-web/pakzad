'use client';
import { createContext, useState, useEffect, useContext } from 'react';

type ResponsiveContextType = {
  active: boolean;
  setActive: (active: boolean) => void;
};

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ active, setActive }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);

  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }

  return context;
};
