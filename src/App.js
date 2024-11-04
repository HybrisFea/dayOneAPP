import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PianoAlimentare from "./pages/PianoAlimentare";
import ImpegniSettimanali from "./pages/ImpegniSettimanali";
import SchedaPalestra from "./pages/SchedaPalestra";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<PianoAlimentare />} />
        <Route path='/impegni-settimanali' element={<ImpegniSettimanali />} />
        <Route path='/scheda-palestra' element={<SchedaPalestra />} />
      </Routes>
    </Router>
  );
}

export default App;
