import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const ContactForm = () => {
    return (
        <ContactSection>
            <ContactWrapper>
                <form 
                    name="contact" 
                    method="post"
                    data-netlify="true"
                    data-netlify-honepot="bot-field"
                >
                    <input name="name" placeholder="Your Name" type="text" />
                    <Button as="button" type="submit" primary="true" round="true">Contact Us</Button>
                </form>
            </ContactWrapper>
        </ContactSection>
        
    )
}

export default ContactForm

const ContactSection = styled.div``
const ContactWrapper = styled.div``