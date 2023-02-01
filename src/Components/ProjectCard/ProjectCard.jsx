import { Technology } from "./TechnologiesCards/Technology"
import { VisitProject } from "./VisitProject"



export const ProjectCard = ( { projecttitle, technologies, linkproject, children } ) => {

    const image = projecttitle.split(' ').join('-')

    const projectImage = `/public/assets/projectsImages/${ image }.png`

    return (
        
        <article className="projectCard">

            {/* Puede ser un gif a futuro */}
            <figure className="projectCard__containerImg">
                <img src={ projectImage } alt="Imagen de Proyecto" />
            </figure>

            <h2 className="projectCard__title"> { projecttitle } </h2>

            { children }

            <div className="projectCard__containerTechnologies">

                {
                    technologies.map( technology => 
                            (
                                <Technology 
                                    key={ technology }
                                    technologyName={ technology } />
                            )
                        )
                }
                
            </div>

            <VisitProject linkproject={ linkproject } /> 

        </article>
    )
}
