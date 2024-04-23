

   import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./Components/All";
import Career from "./Components/Career";
import CyberSecurity from "./Components/CyberSecurity";
import DataScience from "./Components/DataScience";
import FullStackDevelopment from "./Components/FullStackDevelopment";
import NavBar from "./Components/NavBar";
import data from "./assets/course-data.json";


function App() {
  const [courseData, setCourseData] = useState(data);

  return (
    <>
    <h1>hii</h1>
      <NavBar />
      <React>
        <React exact path="/" element={<All courseData={courseData} />} />
        <React
          exact
          path="/fsd"
          element={<FullStackDevelopment courseData={courseData} />}
        />
        <React
          exact
          path="/cs"
          element={<CyberSecurity courseData={courseData} />}
        />
        <React
          exact
          path="/ds"
          element={<DataScience courseData={courseData} />}
        />
        <React exact path="/career" element={<Career />} />
      </React>
    </>
  );
}



export default App
