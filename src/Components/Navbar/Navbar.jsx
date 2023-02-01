import { useState } from "react"


import { HandleMenu } from "./HandleMenu"
import { LogoJairOrozco } from "./LogoJairOrozco"
import { Menu } from "./Menu"




export const Navbar = () => {

    const [toggle, setToggle] = useState( false )

    const onClickMenu = () => {
        setToggle( !toggle )
    }

    return (
        <nav className="navbar">
            <LogoJairOrozco />
            <p className="navbar__nameJair"> Jair San Martin Orozco </p>
            <HandleMenu  
                openclose={ onClickMenu }
                toggle={ toggle }
            />
            <Menu 
                setToggle={ setToggle }
                toggle={ toggle }
            />
        </nav>
    )
}
