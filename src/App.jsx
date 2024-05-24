import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Nav from './components/navbar/Nav';
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <Nav/>
      <Contact/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
