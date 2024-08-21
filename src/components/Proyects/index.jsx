import './styles.css'
import Html from '../Skills/Skillhtml'
import Css from '../Skills/Skillcss'
import Javascript from '../Skills/Skilljs'
import React from '../Skills/Skillreact'
import Bootstrap from '../Skills/Skillbs'

function Proyects() {
    return(
        <div className='proyectBox'>
            <div className='proyectCard'>
                <img src="#" alt="proyect image" />
                <div className='proyectDesc'>
                    <ul>
                        <li><Html /></li>
                        <li><Css /></li>
                        <li><Javascript /></li>
                        <li><React /></li>
                        <li><Bootstrap /></li>
                    </ul>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    );
}

export default Proyects;