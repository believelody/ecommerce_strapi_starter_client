import React from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import { Strong } from 'evergreen-ui/commonjs/typography'
import { Link } from 'react-router-dom'
import ContactForm from '../components/forms/ContactForm'

const bg = `radial-gradient(circle at 28% 51%, rgba(206, 206, 206,0.03) 0%, rgba(206, 206, 206,0.03) 17%,transparent 17%, transparent 100%),radial-gradient(circle at 45% 10%, rgba(10, 10, 10,0.03) 0%, rgba(10, 10, 10,0.03) 45%,transparent 45%, transparent 100%),radial-gradient(circle at 48% 44%, rgba(74, 74, 74,0.03) 0%, rgba(74, 74, 74,0.03) 84%,transparent 84%, transparent 100%),radial-gradient(circle at 47% 50%, rgba(186, 186, 186,0.03) 0%, rgba(186, 186, 186,0.03) 23%,transparent 23%, transparent 100%),radial-gradient(circle at 29% 70%, rgba(9, 9, 9,0.03) 0%, rgba(9, 9, 9,0.03) 32%,transparent 32%, transparent 100%),radial-gradient(circle at 2% 75%, rgba(179, 179, 179,0.03) 0%, rgba(179, 179, 179,0.03) 19%,transparent 19%, transparent 100%),radial-gradient(circle at 2% 36%, rgba(26, 26, 26,0.03) 0%, rgba(26, 26, 26,0.03) 1%,transparent 1%, transparent 100%),radial-gradient(circle at 53% 70%, rgba(90, 90, 90,0.03) 0%, rgba(90, 90, 90,0.03) 55%,transparent 55%, transparent 100%),radial-gradient(circle at 28% 92%, rgba(31, 31, 31,0.03) 0%, rgba(31, 31, 31,0.03) 35%,transparent 35%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))`

const ContactPage = () => {
    return (
        <Pane
            width='100%'
            minHeight='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            background={bg}
        >
            <Pane marginBottom={16}>
                <Heading>A question? A reclamation? Feel free to ask us your preoccupation !</Heading>
                <Paragraph>
                    <i>
                        Don't forget that you can probably find your answer in <Link to='/faq'><Strong>F.A.Q</Strong></Link>
                    </i>
                </Paragraph>
            </Pane>
            <ContactForm />
        </Pane>
    )
}

export default ContactPage
