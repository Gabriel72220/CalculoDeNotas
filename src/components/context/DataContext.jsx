import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [maioresNotas, setMaioresNotas] = useState({ nota1: 0, nota2: 0, nota3: 0 });
  const [media, setMedia] = useState('');

  return (
    <DataContext.Provider value={{ maioresNotas, setMaioresNotas, media, setMedia }}>
      {children}
    </DataContext.Provider>
  );
};
