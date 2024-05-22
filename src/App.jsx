import About from './components/About'
import Contact from './components/Contact'
import Content from './components/Content'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Service from './components/Service'
import ServiceList from './components/Service-List'
import HostLive from './components/host-live'
import HostLiveTalent from './components/host-live-talent'


function App() {
  return (
    <>
      <Navbar/>
      <Contact/>
      <Content>
        <Home/>
        <Service>
          <ServiceList/>
        </Service>
        <About/>
        <HostLive>
          <HostLiveTalent/>
        </HostLive>
      </Content>
      <Footer/>
    </>
  )
}

export default App
