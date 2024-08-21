import './styles.css'
import Html from './Skillhtml'
import Css from './Skillcss'
import Sass from './Skillsass'
import Javascript from './Skilljs'
import Bootstrap from './Skillbs'
import React from './Skillreact'
import Nodejs from './Skillnodejs'
import Express from './Skillex'
import Mongo from './Skillmongo'

function Skills() {
    return(
        <div className='skillBox'>
            <div className='cardContainer'>
                <h1>LENGUAJES DE PROGRAMACIÓN</h1>
                <div className='skillCards'>
                    <ul>
                        <li><Html /></li>
                        <li><Css /></li>
                        <li><Sass /></li>
                        <li><Javascript /></li>
                    </ul>
                </div>
            </div>
            <div className='cardContainer'>
                <h1>FRAMEWORKS Y LIBRERÍAS</h1>
                <div className='skillCards'>
                    <ul>
                        <li><Bootstrap /></li>
                        <li><React /></li>
                        <li><Nodejs /></li>
                        <li><Express /></li>
                    </ul>
                </div>
            </div>
            <div className='cardContainer'>
                <h1>BASE DE DATOS NoSQL</h1>
                <div className='skillCards'>
                    <ul>
                        <li><Mongo /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;