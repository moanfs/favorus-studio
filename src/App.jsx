import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Service from './pages/OurWork';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About/>} />
          <Route path="/our-work" element={<OurWork/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
      </Router>
  )
}

export default App
