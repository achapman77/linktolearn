import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { Button } from './Button'

// Resources
// https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/
// https://codepen.io/dannibla/pen/amgRNR
//https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba

const ContactFormSection = () => {
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    return (
        <ContactSection>
            <ContactWrapper>
                <Formik
                    initialValues={{
                    name: '',
                    email: '',
                    message: '',
                    }}
                    onSubmit={
                        (values, actions) => {
                            fetch("/", {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: encode({ "form-name": "contact-demo", ...values })
                            })
                            .then(() => {
                            alert('Success Foobar');
                            actions.resetForm()
                            })
                            .catch(() => {
                            alert('Error');
                            })
                            .finally(() => actions.setSubmitting(false))
                        }
                    }
                    validate={values => {
                        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        const errors = {};
                        if(!values.name) {
                            errors.name = 'Name Required'
                        }
                        if(!values.email || !emailRegex.test(values.email)) {
                            errors.email = 'Valid Email Required'
                        }
                        if(!values.message) {
                            errors.message = 'Message Required'
                        }
                        return errors;
                    }}
                >
                {() => (
                    <ContactForm name="contact-demo" data-netlify={true} data-netlify-honeypot="bot-field">
                        <FloatingLabel>
                            <FormInput name="name" placeholder=" "/>
                            <span className="highlight"></span>
                            <label htmlFor="name">Name</label>
                            <span className="errorMessage">
                                <ErrorMessage name="name"/>
                            </span>
                        </FloatingLabel>
                        

                        <FloatingLabel>
                            <FormInput name="email" placeholder=" " />
                            <span className="highlight"></span>
                            <label htmlFor="email">Email</label>
                            <span className="errorMessage">
                                <ErrorMessage name="email"/>
                            </span>
                        </FloatingLabel>
                        

                        <FloatingLabel>
                            <FormInput name="message" component="textarea" placeholder=" "/>
                            <span className="highlight"></span>
                            <label htmlFor="message">Message</label>
                            <span className="errorMessage">
                                <ErrorMessage name="message"/>
                            </span>

                        </FloatingLabel>
                        
                        <button type="submit">Send</button>
                    </ContactForm>
                )}
                </Formik>
            </ContactWrapper>
        </ContactSection>
        
    )
}

export default ContactFormSection

const inputHighlighter = keyframes`
    from { background:#5264AE; }
    to { width:0; background:transparent; }
`

const ContactSection = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;

`
const ContactWrapper = styled.div`
    background: white;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactForm = styled(Form)`
    display: flex;
    flex-flow: column;
    /* background: lightblue; */
    width: 75%;
    padding: 5rem 0;
`

const FormInput = styled(Field)`
    font-size:14px;
    padding:4px 4px;
    display:block;
    width:100%;
    height:30px;
    background-color: transparent;
    border:none;
    border-bottom:1px solid #757575;
    
    &:focus{
        outline:none;
        border-bottom:2px solid #5264AE; 
    }

    &:focus ~ label,  &:not(:placeholder-shown) ~ label {
        top:-18px;
        font-size:14px;
        color:#5264AE;
    }

    &:focus ~ .highlight {
        animation:${inputHighlighter} 0.5s ease;
    }
`

const FloatingLabel = styled.div`
    position:relative; 
    margin-bottom:20px;
    height: 50px;

    label {
        color:#999; 
        font-size:14px;
        font-weight:normal;
        position:absolute;
        pointer-events:none;
        left:5px;
        top:5px;
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }

    .highlight {
        position:absolute;
        height:57%; 
        width:100%; 
        top:0; 
        left:0;
        pointer-events:none;
        opacity:0.5;
    }

    .errorMessage {
        color: red;
        font-size: 14px;
    }
`

