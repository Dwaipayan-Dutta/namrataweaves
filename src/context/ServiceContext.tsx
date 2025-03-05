import React, { createContext, useContext, useState } from 'react';

interface ServiceContextType {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  return (
    <ServiceContext.Provider value={{ selectedServiceId, setSelectedServiceId }}>
      {children}
    </ServiceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useService = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};