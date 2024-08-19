import './styles.css'

function Educacion() {
    return(
        <div className='edubox'>
            <div className='educontainer'>
                <h1 className='edutitle'>INGENIERÍA EN INFORMÁTICA</h1>
                <h2 className='edufecha'>2021 - En curso</h2>
                <p className='edudesc'>Carrera de ingeniería informática en la Universidad Nacional de La Matanza ( UNLaM )</p>
            </div>
            <div className='educontainer'>
                <h1 className='edutitle'>DESARROLLADOR FULLSTACK</h1>
                <h2 className='edufecha'>2023 - 2024</h2>
                <p className='edudesc'>Cursos de desarrollador fullstack de la plataforma Coderhouse - Stack MERN</p>
            </div>
            <div className='educontainer'>
                <h1 className='edutitle'>FIRST CERTIFICATE CAMBRIDGE</h1>
                <h2 className='edufecha'>2016</h2>
                <p className='edudesc'>Examen internacional de inglés</p>
            </div>
            <div className='educontainer'>
                <h1 className='edutitle'>BACHILLER EN ECONOMÍA Y EN ADMINISTRACIÓN</h1>
                <h2 className='edufecha'>2010 - 2015</h2>
                <p className='edudesc'>Colegio secundario especializado en economía y administración de empresas</p>
            </div>
        </div>
    );
}

export default Educacion;