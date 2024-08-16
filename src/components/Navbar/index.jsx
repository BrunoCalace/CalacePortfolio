import iconav from '../../assets/icons/iconNav.png'
import './styles.css'
import styled from 'styled-components'

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
`

function Navbar() {
    return(
        <NavbarContainer>
            <div>
                <ul className="nav-ul">
                    <a className="li-icon" href="#section1"><img className="iconNav" src={iconav} alt="icon"/></a>
                    <a className="li" href="#section1">Sobre mí</a>
                    <a className="li" href="#section2">Proyectos</a>
                    <a className="li"href="#section3">Educación</a>
                    <a className="li" href="#section4">Habilidades</a>
                    <a className="li" href="#section5">Contacto</a>
                </ul>
            </div>
        </NavbarContainer>
    );
}

export default Navbar;