

const icon_menu = '/public/assets/icons/icon_menu.svg'
const icon_cerrarMenu = '/public/assets/icons/icon_cerrarMenu.svg'

export const HandleMenu = ( { openclose, toggle } ) => {

    return (
        <figure
            className="handleMenu__container"
            onClick={ openclose }
        >
            <img
                className="handleMenu__img"
                src={ (toggle === false ? icon_menu : icon_cerrarMenu ) } 
                alt="Menú" 
            />
        </figure>
    )
}
