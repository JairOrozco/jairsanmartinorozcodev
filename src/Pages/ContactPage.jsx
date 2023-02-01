import { Contact, ContactItem, Section } from "../Components"


export const ContactPage = () => {
    return (
        <>
            <Section
                title='Contacto'
            >
                <Contact />
            </Section>

            <div className="contactPage__containerContactItem">

                <ContactItem 
                    itemName='Email'
                    link='https://mail.google.com/mail/u/2/#inbox'
                />

                <ContactItem 
                    itemName='Linkedin'
                    link='https://www.linkedin.com/in/jair-san-martin-orozco/'
                />

                <ContactItem 
                    itemName='GitHub'
                    link='https://github.com/JairOrozco'
                />

            </div>
        </>
    )
}
