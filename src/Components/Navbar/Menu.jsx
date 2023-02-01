import { Link } from "react-router-dom"


export const Menu = ( { toggle, setToggle } ) => {

    const clickHideMenu = () => {
        setToggle( !toggle )
    }

    return (
        <ul className={ `menu__list ${(toggle) ? 'showMenu' : 'hideMenu' }` }>
            <Link className="menu__item " to='/' onClick={ clickHideMenu } > Home </Link>
            <Link className="menu__item" to='/about' onClick={ clickHideMenu }> Sobre mí </Link>
            <Link className="menu__item" to='/portfolio' onClick={ clickHideMenu }> Portfolio </Link>
            <Link className="menu__item" to='/contact' onClick={ clickHideMenu }> Contacto </Link>
        </ul>
    )
}
