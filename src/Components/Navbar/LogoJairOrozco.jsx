//import react router
import { Link } from 'react-router-dom'

//import imagenes
const logo_dev_jair = '/public/assets/icons/jair-dev-logo.svg'


export const LogoJairOrozco = () => {
    return (
        <Link to='/' >
            <figure className='logo__container'>
                <img 
                    className='logo__img' 
                    src={ logo_dev_jair } 
                    alt="Logo Jair San Martin Orozco" 
                />
            </figure>
        </Link>
    )
}