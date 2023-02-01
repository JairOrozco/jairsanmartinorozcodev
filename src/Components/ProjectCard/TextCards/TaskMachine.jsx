

export const TaskMachine = () => {

    return (
        <p className="projectCard__description">
            Es un proyecto desarrollado con <b>React.js</b> en donde uso Hooks tales como <b>useState, useEffect, useReducer</b>. 
            <br />
            Está pensado para tener un control de las actividades que uno tiene que realizar en su día a día.
        </p>
    )
}

export const TaskMachineComplete = () => {

    return (
        <p className="projectCard__description">
            Es un proyecto desarrollado con <b>React.js</b> en donde pongo en uso <b>Hooks</b> como <b>useState, useEffect, useReducer</b>. 
            <br />
            Está pensado para tener un control de las actividades que uno tiene que realizar en su día a día. Hay que ingresar una tarea y el <b>localStorage</b> la mantendrá en nuestro navegador hasta que decidamos eliminarla.
            <br />
            Las tareas se pueden marcar como completadas o simplemente eliminarlas. También cuenta con un contador de tareas realizadas y de tareas totales, así se puede saber cuantas tareas hay aún pendientes.
        </p>
    )
}
