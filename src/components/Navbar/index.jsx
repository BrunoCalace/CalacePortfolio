import iconav from '../../assets/icons/iconNav.png'
import './styles.css'
import styled from 'styled-components'
import { useState } from 'react';

const NavbarContainer = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
    }

    @media (max-width: 480px) {
        flex-direction: row;
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
    }
`;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`nav-ul ${isOpen ? 'open' : ''}`}>
                <a className="li-icon" href="#sobremi"><img className="iconNav" src={iconav} alt="icon"/></a>
                <a className="li" href="#sobremi">Sobre mí</a>
                <a className="li" href="#proyectos">Proyectos</a>
                <a className="li" href="#educacion">Educación</a>
                <a className="li" href="#habilidades">Habilidades</a>
                <a className="li" href="#contacto">Contacto</a>
            </ul>
        </NavbarContainer>
    );
}

export default Navbar;