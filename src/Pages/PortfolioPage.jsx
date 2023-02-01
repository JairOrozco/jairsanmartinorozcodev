
import { HotWheelsComplete, JournalAppComplete, NextMovieAppComplete, PortfolioDescription, ProjectCard, Section, TaskMachineComplete } from '../Components'


export const PortfolioPage = () => {
    return (
        <>
            <Section
                title='Portfolio / Experiencia'
            >
                <PortfolioDescription />
            </Section>

            <section className="homePage__containerProjects">
                <ProjectCard 
                    projecttitle='Task Machine' 
                    technologies={ [ 'React.js', 'JavaScript', 'Sass', 'Node.js', 'Vite' ] }
                    linkproject='https://jairorozco.github.io/task-machine/'
                >
                    <TaskMachineComplete />
                </ProjectCard>
        
                <ProjectCard 
                    projecttitle='Mario Kart Hot Wheels' 
                    technologies={ [ 'HTML', 'JavaScript', 'Sass' ] }
                    linkproject='https://jairorozco.github.io/hw-mariokart-collection/'
                >
                    <HotWheelsComplete />
                </ProjectCard>
        
                <ProjectCard 
                    projecttitle='My Next Movie App' 
                    technologies={ [ 'React.js', 'JavaScript', 'React Router', 'API Rest', 'Node.js', 'Vite' ] }
                    linkproject='https://my-next-movie-app.netlify.app/'
                >
                    <NextMovieAppComplete />
                </ProjectCard>
        
                <ProjectCard 
                    projecttitle='Journal App' 
                    technologies={ [ 'React.js', 'Redux', 'React Router', 'Firebase', 'DataBase', 'Autenticación' ] }
                    linkproject='https://journal-application.netlify.app/'
                >
                    <JournalAppComplete />
                </ProjectCard>
            </section>

            
        </>
    )
}
