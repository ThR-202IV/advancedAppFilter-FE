import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BootcampsPage } from "./pages/BootcampsPage";
import Navbar from "./components/Navbar";

export const URL = process.env.REACT_APP_SERVER_URL;

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<BootcampsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
