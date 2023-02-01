

export const ContactItem = ( { itemName, link } ) => {

    const itemContactImage = `/public/assets/socialMedia/${ itemName }.svg`

    return (

        <figure className="contactItem__containerImg">
            <a href={ link } target='_blank'>
                <img src={ itemContactImage } alt="Método de contacto" />
            </a>
        </figure>
    )
}
