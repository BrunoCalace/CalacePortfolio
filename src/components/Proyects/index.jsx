import './styles.css'
import Html from '../Skills/Skillhtml'
import Css from '../Skills/Skillcss'
import Sass from '../Skills/Skillsass'
import Javascript from '../Skills/Skilljs'
import React from '../Skills/Skillreact'
import Bootstrap from '../Skills/Skillbs'
import Nodejs from '../Skills/Skillnodejs'
import Mongo from '../Skills/Skillmongo'
import Express from '../Skills/Skillex'

function Proyects() {
    return(
        <div className='proyectBox'>
            <div className='proyectCard'>
                <div className='proyectTitle' id='C'>
                    <h1>Pathfinder Spell List</h1>
                </div>
                <div className='proyectDesc'>
                    <p>Este es un proyecto sin fin de lucro, todos los derechos reservados Paizo "Pathfinder: 2nd edition". Spell list y spell repertoire con spell slots atomatizados para cada lvl. La idea surge de optimizar el tiempo de decisión sobre que poder utilizar por los spell casters asi como el facil acceso a su información durante una sesión de TTRPG.</p>
                    <p>En este proyecto se utilizo: </p>
                    <ul>
                        <li><Html /></li>
                        <li><Sass /></li>
                        <li><Javascript /></li>
                        <li><React /></li>
                    </ul>
                    <a href="https://brunocalace.github.io/occultSpellList/" target="_blank" rel="noopener noreferrer">
                        brunocalace.github.io/occultSpellList/
                    </a>
                </div>
            </div>
            <div className='proyectCard'>
                <div className='proyectTitle' id='A'>
                    <h1>Ecommerce Frontend</h1>
                </div>
                <div className='proyectDesc'>
                    <p>En este proyecto se utilizo: </p>
                    <ul>
                        <li><Html /></li>
                        <li><Css /></li>
                        <li><Javascript /></li>
                        <li><React /></li>
                        <li><Bootstrap /></li>
                    </ul>
                    <a href="https://brunocalace.github.io/React.js-ViveYSuelta/" target="_blank" rel="noopener noreferrer">
                        brunocalace.github.io/React.js-ViveYSuelta/
                    </a>
                </div>
            </div>
            <div className='proyectCard'>
                <div className='proyectTitle' id='B'>
                    <h1>Ecommerce Fullstack</h1>
                </div>
                <div className='proyectDesc'>
                    <p>En este proyecto se utilizo: </p>
                    <ul>
                        <li><Html /></li>
                        <li><Css /></li>
                        <li><Javascript /></li>
                        <li><Bootstrap /></li>
                        <li><Nodejs /></li>
                        <li><Mongo /></li>
                        <li><Express /></li>
                    </ul>
                    <a href="https://viveysuelta.onrender.com" target="_blank" rel="noopener noreferrer">
                        viveysuelta.onrender.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Proyects;