import Footer from "../components/Footer"
import Nav from "../components/navbar/Nav"
import '../index.css'

const Main = (props) =>(
    <>
    <Nav/>
        {props.children}
    <Footer/>
    </>
)
export default Main