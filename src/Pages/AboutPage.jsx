import { AboutMe, Courses, EducationCard, Languages, Section, SoftwareSkills } from "../Components"
import { Technology } from '../Components/ProjectCard/TechnologiesCards/Technology'


const jairImageProfile = "/public/assets/jairImages/jair-profile-picture.png"

const technologiesSkills = [ 'React.js', 'Sass', 'Git', 'JavaScript', 'Algoritmos', 'GitHub', 'HTML', 'JSON', 'Node.js', 'CSS', 'API Rest', 'SQL' ]

export const AboutPage = () => {


    return (
        <>
            <Section
                title='Sobre mí'
            >
                <AboutMe />
            </Section>

            <figure className="aboutPage__containerProfileImage">
                <img src={ jairImageProfile } alt="Foto Jair San Martin Orozco" />
            </figure>

            <Section
                title='Software'
            >
                <SoftwareSkills />
            </Section>

            <div className="aboutPage__containerTechnologies">
                {
                    technologiesSkills.map( technology => 
                            (
                                <Technology 
                                    key={ technology }
                                    technologyName={ technology }
                                />
                            )
                        )
                }

            </div>

            <Section
                title='Idiomas'
            >
                <Languages />
            </Section>

            <Section
                title='Formación'
            >
            </Section>

            <EducationCard
                period='Actualidad' 
                school='Platzi'
                extrainfo={ [ 'Escuela de Desarrollo Web', 'Escuela de Javascript', 'Escuela de Inglés' ] }
            />

            <EducationCard
                period='Generación 2015 - 2019' 
                school='Universidad Nacional Autónoma de México'
                extrainfo={ [ 'Facultad de Estudios Superiores Acatlán', 'Licenciatura en Diseño Gráfico' ] }
            />

            <Section
                title='Cursos'
            >
                <Courses />
            </Section>

        </>
    )
}
