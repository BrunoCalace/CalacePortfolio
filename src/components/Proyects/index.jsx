import './styles.css'
import Html from '../Skills/Skillhtml'
import Css from '../Skills/Skillcss'
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
                <div className='proyectTitle'>
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
                    <a href="#">deploy</a>
                </div>
            </div>
            <div className='proyectCard'>
                <div className='proyectTitle'>
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
                    <a href="#">deploy</a>
                </div>
            </div>
        </div>
    );
}

export default Proyects;