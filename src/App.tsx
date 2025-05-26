import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import 'leaflet/dist/leaflet.css';


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const AnimatedSVG = lazy(() => import("./pages/AnimSVG"));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>} />
        <Route path="/animatedSVG" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedSVG />
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
