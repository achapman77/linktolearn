import React from 'react'
import styled from 'styled-components'
// import { Button } from './Button'

const ContactForm = () => {
    return (
        <ContactSection>
            <ContactWrapper>
                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <p className="hidden">
                        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    </p>
                    <p>
                        <label>Email: <input type="text" name="email" /></label>
                    </p>
                    {/* <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p> */}
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </ContactWrapper>
        </ContactSection>
        
    )
}

export default ContactForm

const ContactSection = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
`
const ContactWrapper = styled.div`
    background: white;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    form {
        input {
            height: 40px;
            margin: 5px;
            border-radius: 4px;
        }

        .hidden {
            opacity: 0;
        }
    }
`