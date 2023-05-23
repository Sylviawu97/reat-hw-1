import React, { createContext } from 'react';

export const DataContext = createContext();

function DataContextProvider({ children }) {
  // Simulated employee data
  const employees = [
    { id: '1', name: 'Sylvia One', yearOfWork: 2018 },
    { id: '2', name: 'Syl Two', yearOfWork: 2020 },
    { id: '3', name: 'St Three', yearOfWork: 2019 },
  ];

  return <DataContext.Provider value={{ employees }}>{children}</DataContext.Provider>;
}

export default DataContextProvider;