import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Loading from './components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = lazy(() => import('./pages/Home')) ;
const OurWork = lazy(() => import('./pages/OurWork'));
const Service = lazy(() => import('./pages/Service'));
const NotFound = lazy(() => import('./components/NotFound'));


function App() {
  useEffect(() => {
    AOS.init({
    duration: 1000, 
    once: false, 
    });
    }, []);
  return (
      <Router>
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/our-work" element={<OurWork/>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </Router>
  )
}

export default App
