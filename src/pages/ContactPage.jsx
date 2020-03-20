import React from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import { Strong } from 'evergreen-ui/commonjs/typography'
import { Link } from 'react-router-dom'
import ContactForm from '../components/forms/ContactForm'

const bg = `radial-gradient(circle at 69% 86%, rgba(165, 165, 165,0.06) 0%, rgba(165, 165, 165,0.06) 25%,rgba(193, 193, 193,0.06) 25%, rgba(193, 193, 193,0.06) 50%,rgba(221, 221, 221,0.06) 50%, rgba(221, 221, 221,0.06) 75%,rgba(249, 249, 249,0.06) 75%, rgba(249, 249, 249,0.06) 100%),radial-gradient(circle at 49% 76%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 25%,rgba(164, 164, 164,0.06) 25%, rgba(164, 164, 164,0.06) 50%,rgba(200, 200, 200,0.06) 50%, rgba(200, 200, 200,0.06) 75%,rgba(235, 235, 235,0.06) 75%, rgba(235, 235, 235,0.06) 100%),radial-gradient(circle at 22% 64%, rgba(173, 173, 173,0.06) 0%, rgba(173, 173, 173,0.06) 25%,rgba(119, 119, 119,0.06) 25%, rgba(119, 119, 119,0.06) 50%,rgba(64, 64, 64,0.06) 50%, rgba(64, 64, 64,0.06) 75%,rgba(10, 10, 10,0.06) 75%, rgba(10, 10, 10,0.06) 100%),linear-gradient(307deg, rgb(255,255,255),rgb(255,255,255))`

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
                    Don't forget that you can probably find your answer in <Link to='/faq'><Strong>F.A.Q</Strong></Link>
                </Paragraph>
            </Pane>
            <ContactForm />
        </Pane>
    )
}

export default ContactPage
