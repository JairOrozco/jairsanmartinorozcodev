

export const NextMovieApp = () => {
    return (
        <p className="projectCard__description">
            Es una aplicación hecha con <b>React.js</b> en la cual trabajo <b>asincronísmo</b> consumiendo la <a href="https://developers.themoviedb.org/3/getting-started/introduction">API de TMDB</a>.
            <br />
            La aplicación funciona para buscar películas además de mostrar las tendencias y arrojar resultados por categoría (género).
        </p>
    )
}


export const NextMovieAppComplete = () => {
    return (
        <p className="projectCard__description">
            Es una aplicación hecha con <b>React.js</b> en la cual trabajo <b>asincronísmo</b> usando la API de TMDB.
            <br />
            Hago uso de <b>componentes, Hooks de React, custom Hooks</b>, además de implementar <b>React Router V6</b>. Esta última herramienta la implemento para crear la navegación de la aplicación y así poder mostrar diferentes secciones.
            <br />
            La aplicación funciona para buscar películas además de mostrar las tendencias y arrojar resultados por categoría (género).
            <br />
            Como parte de las optimizaciones, la aplicación tiene implementado <b>lazy loading</b> en la carga de imagenes.
            <br />
            Otra implementación es el poder guardar tus peliculas favoritas o que quieras ver en una sección específica del Home, y gracias al <b>localStorage</b> esa información persiste aún y cuando el navegador se cierre.
            <br />
            La aplicación está <b>optimizada</b> para funcionar en variedad de resoluciones, desde 375px hasta 1440px.
        </p>
    )
}