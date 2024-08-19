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
                    <a className="li-icon" href="#sobremi"><img className="iconNav" src={iconav} alt="icon"/></a>
                    <a className="li" href="#sobremi">Sobre mí</a>
                    <a className="li" href="#proyectos">Proyectos</a>
                    <a className="li"href="#educacion">Educación</a>
                    <a className="li" href="#habilidades">Habilidades</a>
                    <a className="li" href="#contacto">Contacto</a>
                </ul>
            </div>
        </NavbarContainer>
    );
}

export default Navbar;