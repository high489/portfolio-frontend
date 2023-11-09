import React, { createContext, useContext, useState } from 'react';
import { mockData } from './mockData';

const StoreContext = createContext()

const useStore = () => {
  return useContext(StoreContext)
};

const StoreProvider = ({ children }) => {
  // eslint-disable-next-line
  const [store, setStore] = useState(mockData)

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

export { useStore, StoreProvider };