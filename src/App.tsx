import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import OsterMap from "./pages/OsterMap";
import 'leaflet/dist/leaflet.css';


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>} />
        <Route path="/ostermap" element={
          <Suspense fallback={<div>Loading...</div>}>
            <OsterMap />
          </Suspense>} />
        <Route path="/about" element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>} />
        <Route path="/projects" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
