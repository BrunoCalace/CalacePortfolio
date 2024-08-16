import './styles.css'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Proyects from '../../components/Proyects'
import Educacion from '../../components/Educacion'
import Skills from '../..//components/Skills'
import Contacto from '../../components/Contacto'
/*import Footer from "../../components/Footer" */

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="content-container">
                <section id="section1">
                    <About />
                </section>
                <section id="section2">
                    <Proyects />
                </section>
                <section id="section3">
                    <Educacion />
                </section>
                <section id="section4">
                    <Skills />
                </section>
                <section id="section5">
                    <Contacto />
                </section> 
            </div>
        </div>
    )
}

export default Home