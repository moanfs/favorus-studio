import Footer from "../components/Footer"
import Nav from "../components/navbar/Nav"
import Contact from "../components/Contact"
import '../index.css'

const Main = (props) =>(
    <>
    <Nav/>
        {props.children}
        <Contact/>
    <Footer/>
    </>
)
export default Main