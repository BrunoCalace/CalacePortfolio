import './styles.css';

function Typescript() {
    return (
        <div className='skill' id='typescript'>
            <svg width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id="ts-mask">
                        <rect width="32" height="32" fill="white"/>
                        <text x="6" y="24" fontSize="18" fill="black" fontFamily="Arial" fontWeight="bold">TS</text>
                    </mask>
                </defs>
                <rect width="32" height="32" fill="black" rx="5" ry="5" mask="url(#ts-mask)"/>
            </svg>
            <p>TYPESCRIPT</p>
        </div>
    );
}

export default Typescript;
