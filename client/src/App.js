import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import OrgChartPage from "./pages/org-chart-page";
import RosterUploadPage from "./pages/roster-upload-page";
import CardPage from "./pages/card-page";
import MissingPage from "./pages/missing-page";

const App = () => {
  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<Home />} />

        {/* private */}
        <Route path="/org" element={<OrgChartPage />} />
        <Route path="/upload" element={<RosterUploadPage />} />
        <Route path="/cards" element={<CardPage />} />

        {/* catch-all */}
        <Route path='/*' element={<MissingPage />} />
      </Routes>
    </>
  );
};

export default App;
