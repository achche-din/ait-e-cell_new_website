import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { mainRoute } from "./routes";
import { useData } from "./contexts/DataContext";
import { DataProvider } from "./contexts/DataContext";

import "./App.css";

function App() {
  const { isLoading, error } = useData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log("error", error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <DataProvider>
      {" "}
      <Navbar />
      <Routes>
        {mainRoute.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </DataProvider>
  );
  // }
}

export default App;
