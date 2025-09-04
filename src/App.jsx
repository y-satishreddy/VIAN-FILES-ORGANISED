import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import CompletedProjects from "./pages/CompletedProjects";
import OnGoingProjects from "./pages/OnGoingProjects";
import FutureProjects from "./pages/FutureProjects";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./pages/ScrollToTop";
import TermsOfUse from "./pages/TermsOfUse";
import Privacy from "./pages/Privacy";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route
          path="/completed-projects"
          element={<CompletedProjects />}
        ></Route>
        <Route path="/ongoing-projects" element={<OnGoingProjects />}></Route>
        <Route path="/future-projects" element={<FutureProjects />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/terms-of-use" element={<TermsOfUse />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
    </>
  );
}

export default App;
