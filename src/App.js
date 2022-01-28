import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import { Navbar } from "./component/Navbar/index";


import { mainRoute } from "./routes";

import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://aitecell.herokuapp.com/api/eventtypes/")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setData(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  return (
    <>
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
     
    </>
  );
  // }
}

export default App;
