import React, { useEffect, useState } from "react";

import "./App.css";
import { TeamPage } from "./component/teampage/TeamPage";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { HomePage } from "./component/homePage/homePage";
import { Home } from "./component/home/home";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://aitecell.herokuapp.com/api/eventtypes/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar />
        {/* <TeamPage /> */}
        <HomePage />
        <Footer />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
