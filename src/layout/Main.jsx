import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Contact from "../components/Contact"
import '../index.css'

const Main = (props) =>(
    <>
    <Nav/>
    <main>
        {props.children}
    </main>
        <Contact/>
    <Footer/>
    </>
)
export default Main