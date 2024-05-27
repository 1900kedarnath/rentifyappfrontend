import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children ,userId}) => {
  const [data, setData] = useState(userId);

  return (
    <DataContext.Provider value={{ data,setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
