import React, { useState } from 'react'
import { Card, Textarea, Button, Text, Pane, Select, Paragraph, Spinner } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import verifyEmailTemplateUtils from '../../utils/verifyEmailTemplate.utils'

const topics = [
    { value: 'product-reclamation', text: 'I want to make a reclamation about a product' },
    { value: 'shipping-reclamation', text: 'I want to make a reclamation about shipping' },
    { value: 'partnership', text: 'I want a partnership with you' },
    { value: 'other', text: 'Don\'t find what you search, tell us' }
]

const placeholderFromTopics = topic => {
    switch (topic) {
        case 'product-reclamation':
            return `If you contact us about a receive product, please, give us order number. If it conerns a damaged product, feel free to share with us any photos you have.`

        case 'shipping-reclamation':
            return `If you contact us about an order, please, give us order number and more important, order tracking number.`

        case 'partnership':
            return `Please, share with us your brand and the purpose of the partnership. Also, we'll really appreciate if you give us a website or any way to look at your product.`

        case 'other':
            return `Please tell us what you worry about` 

        default:
            return `Please tell us what you worry about`;
    }
}

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [select, setSelect] = useState(0)
    const [text, setText] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [isSubmitted, setSubmit] = useState(false)
    const [errors, setErrors] = useState(null)

    const handleName = e => setName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleSelect = e => setSelect(e.target.value)
    const handleText = e => setText(e.target.value)

    const handleSubmit = async e => {
        e.preventDefault()
        if (!name) {
            setErrors({ name: 'Name is required' })
        }
        else if (!email) {
            setErrors({ email: 'Email is required' })
        }
        else if (!text) {
            setErrors({ text: 'Text is required' })
        }
        else {
            try {
                setSubmitting(true)
                await verifyEmailTemplateUtils(
                    email,
                    topics[select].text,
                    `Message from ${name},
                    ${text}`,
                    `<h2>Message from ${name},</h2>
                    <p>${text}</p>`
                )
                setSubmitting(false)
                setSubmit(true)
            } catch (e) {
                console.log(e.message)
                setSubmitting(false)
            }
        }
    }

    return (
        !isSubmitted ?
        <Card
            is='form'
            onSubmit={handleSubmit}
            border
            textAlign='center'
            elevation={2}
            width='60%'
            background='tint1'
            padding={16}
        >
            <Pane display='flex' justifyContent='space-between' width='100%'>
                <FieldComponent
                    label={<Text>Your name *</Text>}
                    name='name'
                    placeholder='please type your name here'
                    value={name}
                    handleChange={handleName}
                    error={errors && errors.name}
                    width='45%'
                />
                <FieldComponent
                    label={<Text>Your email *</Text>}
                    name='email'
                    type='email'
                    placeholder='ex: username@mail.com'
                    value={email}
                    handleChange={handleEmail}
                    error={errors && errors.email}
                    width='45%'
                />
            </Pane>
            <Pane marginBottom={8}>
                <Select width='100%' value={select} onChange={handleSelect}>
                    {
                        topics.length > 0 && topics.map((topic, i) =>
                            <option key={i} value={i}>
                                {topic.text}
                            </option>
                        )
                    }
                </Select>
            </Pane>
            <Textarea
                grammarly
                minHeight={200}
                name='text'
                onChange={handleText}
                placeholder={placeholderFromTopics(topics[select].value)}
                value={text}
            />
            <Button appearance='primary' disabled={submitting} marginTop={16}>
                {
                    !submitting ? 
                    <>Send your demand</> : 
                    <>Sending message, please wait ... <Spinner size={20} marginLeft={4} /></>
                }
            </Button>
        </Card>
        :
        <Card background='tealTint' padding={16} marginTop={32} elevation={1}>
            <Paragraph>
                Your message has been correctly sent. We will reply to you sooner possible. Thank you !
            </Paragraph>
        </Card>
    )
}

export default ContactForm
