import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { Button } from './Button'

const ContactForm = () => {
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
                            alert('Success');
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
                    <Form name="contact-demo" data-netlify={true}>
                        <label htmlFor="name">Name: </label>
                        <Field name="name" />
                        <ErrorMessage name="name"/>

                        <label htmlFor="email">Email: </label>
                        <Field name="email" />
                        <ErrorMessage name="email"/>

                        <label htmlFor="message">Message: </label>
                        <Field name="message" component="textarea"/>
                        <ErrorMessage name="message"/>

                        <button type="submit">Send</button>
                    </Form>
                )}
                </Formik>
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
    /* height: 20vh; */
`
const ContactWrapper = styled.div`
    background: white;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 90%; */
    form {
        display: flex;
        flex-flow: column;
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