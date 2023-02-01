

export const Section = ( { title, children } ) => {
    
    return (
        <div className="section__container">
            <h2 className="title"> 
                { title } 
            </h2>
            { children }
        </div>
    )
}
