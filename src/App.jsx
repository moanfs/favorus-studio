import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Service from './pages/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
    duration: 1000, 
    once: true, 
    });
    }, []);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/our-work" element={<OurWork/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
  )
}

export default App
