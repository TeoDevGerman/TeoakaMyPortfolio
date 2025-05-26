import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import 'leaflet/dist/leaflet.css';


const Home = lazy(() => import("./pages/Home"));
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
      </Routes>
    </Router>
  );
}

export default App;
