import React, { useState, useContext, createContext } from "react";
import { useDataHooks } from "../hooks/useDataHooks";

const DataContext = createContext({});

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { data, isLoading, error } = useDataHooks();

  const value = {
    data,
    isLoading,
    error,
  };

  return (
    <DataContext.Provider value={value}>
      {!isLoading && children}
    </DataContext.Provider>
  );
}
