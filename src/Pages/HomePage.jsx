import { Link } from "react-router-dom"

import { Section, PortfolioDescriptionShort, ProjectCard, TaskMachine, HotWheels, JournalApp, NextMovieApp } from "../Components"



const icon_linkedin = '/public/assets/socialMedia/Linkedin.svg'
const icon_gitHub = '/public/assets/socialMedia/GitHub.svg'


export const HomePage = () => {

    return (

        <>
            <h1> 
                Desarrollador Web
            </h1>

            <p className="homePage__introduction">
                Soy <b>Frontend Developer con 1 año de experiencia</b> desarrollando proyectos personales. Busco colaborar en una posición como <b>Desarrollador Web</b> ya que cuento con sólidos conocimientos en <b>HTML, CSS, JavaScript y React.js</b>.
            </p>

            <section className="homePage__socialMedia">
                <figure className="homePage__socialMedia__containerLogoLinkedin">
                    <a href="https://www.linkedin.com/in/jair-san-martin-orozco/">
                        <img 
                            className="homePage__socialMedia__logoLinkedin" 
                            src={ icon_linkedin }
                            alt="LinkedIn Jair San Martin Orozco" 
                        />
                    </a>
                </figure>
                <figure className="homePage__socialMedia__containerLogoGitHub">
                    <a href="https://github.com/JairOrozco">
                        <img 
                            className="homePage__socialMedia__logoGitHub"
                            src={ icon_gitHub } 
                            alt="GitHub Jair San Martin Orozco" 
                        />
                    </a>
                </figure>
            </section>

            <Link 
                to='/about'
                className="homePage__masInformacion"
            >
                Más acerca de mí
            </Link>

            <Section
                title='Portfolio / Experiencia'
            >
                <PortfolioDescriptionShort />
            </Section>

            <section className="homePage__containerProjects">

                <ProjectCard 
                    projecttitle='Task Machine' 
                    technologies={ [ 'React.js', 'JavaScript', 'Sass', 'Node.js', 'Vite' ] }
                    linkproject='https://jairorozco.github.io/task-machine/'
                >
                    <TaskMachine />
                </ProjectCard>

                <ProjectCard 
                    projecttitle='Mario Kart Hot Wheels' 
                    technologies={ [ 'HTML', 'JavaScript', 'Sass' ] }
                    linkproject='https://jairorozco.github.io/hw-mariokart-collection/'
                >
                    <HotWheels />
                </ProjectCard>

                <ProjectCard 
                    projecttitle='My Next Movie App' 
                    technologies={ [ 'React.js', 'JavaScript', 'React Router', 'API Rest', 'Node.js', 'Vite' ] }
                    linkproject='https://my-next-movie-app.netlify.app/'
                >
                    <NextMovieApp />
                </ProjectCard>

                <ProjectCard 
                    projecttitle='Journal App' 
                    technologies={ [ 'React.js', 'Redux', 'React Router', 'Firebase', 'DataBase', 'Autenticación' ] }
                    linkproject='https://journal-application.netlify.app/'
                >
                    <JournalApp />
                </ProjectCard>


            </section>

            
            <div className="homePage__masProyectos">
                <a href="https://github.com/JairOrozco" target='_blank'>
                    Ver más proyectos
                </a>
            </div>


        </>


    )
}
