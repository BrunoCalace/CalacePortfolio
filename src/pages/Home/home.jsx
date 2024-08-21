import './styles.css'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Proyects from '../../components/Proyects'
import Educacion from '../../components/Educacion'
import Skills from '../../components/Skills'
import Contacto from '../../components/Contacto'

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="content-container">
                <section id="sobremi">
                    <About />
                </section>
                <section id="proyectos">
                    <Proyects />
                </section>
                <section id="educacion">
                    <Educacion />
                </section>
                <section id="habilidades">
                    <Skills />
                </section>
                <section id="contacto">
                    <Contacto />
                </section> 
            </div>
        </div>
    )
}

export default Home