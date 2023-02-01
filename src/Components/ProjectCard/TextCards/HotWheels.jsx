
import React from 'react'

export const HotWheels = () => {
    return (
        <p className="projectCard__description">
            Es un sitio realizado con <b>JavaScript Vanilla</b> en donde recopilo todo lo relacionado a la linea de Mario Kart en colaboración con Hot Wheels. Hace uso del <b>localStorage</b> para guardar el producto que ya se tenga para así llevar un control sobre los articulos en posesión y los faltantes.
        </p>
    )
}


export const HotWheelsComplete = () => {
    return (
        <p className="projectCard__description">
            Es un sitio realizado con <b>JavaScript Vanilla</b> en donde recopilo todo lo relacionado a la linea de Mario Kart en colaboración con Hot Wheels. En el sitio se puede navegar por 4 direntes secciones en donde se encontrarán todos los artículos que hasta la fecha han sido lanzados como parte de la colección.
            <br />
            El sitio tiene la opción de guardar el producto que ya se tenga para así llevar un control sobre los articulos en posesión y los faltantes. Hace uso del <b>localStorage</b> para poder preservar está información en el navegador.
            <br />
            El sitio es <b>responsivo</b> y su óptima visualización se da en resoluciones de 375px, 668px y 1440px.
        </p>
    )
}