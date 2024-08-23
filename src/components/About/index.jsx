import './styles.css'
import cv from '../../assets/docs/CalaceBruno-CV.pdf'

function About() {
    return(
        <div className='aboutBox'>
            <h1>Bruno Calace</h1>
            <h2>Bienvenido a mi portfolio</h2>
            <div className='aboutDestContainer'>
                <p className='aboutDest'>Soy desarrollador fullstack, apasionado de la tecnología y el deporte.</p>
                <p className='aboutDest'>Me caracterizan el trabajo en equipo, la toma de decisiones efectiva y una actitud de trabajo ligada a procedimientos</p>
                <p className='aboutDest'>Actualmente estoy estudiando la carrera de Ingeniería en Informática en la Universidad Nacional de La Matanza y estoy en búsqueda de experiencias laborales que me permitan desarrollar y aplicar los conocimientos que adquiero día a día en la carrera.</p>
            </div>
            <a href={cv} download="CalaceBruno-CV.pdf">
                <button>Descargar CV</button>
            </a>
            
        </div>
    );
}

export default About;