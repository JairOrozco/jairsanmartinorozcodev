

export const JournalApp = () => {
    return (
        <p className="projectCard__description">
            El sitio tiene como finalidad servir como un diario digital en donde se pueden crear entradas.
            <br />
            Está desarrollado con <b>React.js</b>, las notas se guardan en <b>Firebase</b> que también es utilizado para realizar la <b>autenticación</b> del usuario.
        </p>
    )
}


export const JournalAppComplete = () => {
    return (
        <p className="projectCard__description">
            El sitio tiene como finalidad servir como un diario digital en donde se pueden crear entradas con título, una descripción y agregar imágenes.
            <br />
            Está desarrollado con <b>React.js</b> y hace uso de <b>Redux</b> para manejar el estado. Las notas se guardan en <b>Firebase</b> que también es utilizado para realizar la <b>autenticación</b> del usuario que si no tiene cuenta puede crearse una y acceder al sitio.
        </p>
    )
}