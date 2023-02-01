


export const EducationCard = ( { period, school, extrainfo } ) => {

    const schoolImageModified = school.split(' ').join('-')

    const schoolImage = `/public/assets/schoolsImages/${ schoolImageModified }.png`


    return (

        <article className="educationCard">

            <div className="educationCard__infoSchoolContainer">
                <p className="period"> { period } </p>
                <p className="schoolName"> { school } </p>
                {
                    extrainfo.map( extrainfoitem => 
                            (
                                <p className="extraInfoItem"> { extrainfoitem } </p>
                            )
                        )
                }
            </div>

            <figure className="educationCard__imageSchoolContainer">
                <img src={ schoolImage } alt="Logo Institución Educativa" />
            </figure>

        </article>
    )
}
