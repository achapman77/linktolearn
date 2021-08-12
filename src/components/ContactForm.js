import React, {useState} from 'react'
import styled from 'styled-components'
//form validation
import { Formik, Form, Field, ErrorMessage } from 'formik'
//layout
import { Section, SectionHeader, Container } from './layout/Section'
import { Button } from './Button'
import { FloatingLabel } from './inputs/FloatingLabel'
//icons
import { AiOutlineMail, AiOutlinePhone, AiOutlineQuestionCircle  } from 'react-icons/ai'
import { RiMessage2Line  } from 'react-icons/ri'
import { IoPersonOutline  } from 'react-icons/io5'


// Resources
// https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/
// https://codepen.io/dannibla/pen/amgRNR
// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// https://formik.org/docs/api/field

const ContactFormSection = () => {
    const [floatSelect, setFloatSelect] = useState(false)
    const [previousValue, setPreviousValue] = useState("")

    const handleSelectClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        let val = e.target.value
        if (val === "") {
            setFloatSelect(false)
        } else {
            setFloatSelect(true)
        }
    }

    const normalizePhoneInput = (e) => {
        setPreviousValue(document.getElementById("contact_phone").value)
        const value = document.getElementById("contact_phone").value
        

        if (!value) return value;
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length;
        
        if (!previousValue || value.length > previousValue.length) {
            if (cvLength < 4) {
                setPreviousValue(currentValue)
                return
            }
            if (cvLength < 7) {
                setPreviousValue(`(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`)
                return
            } 
            setPreviousValue(`(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)} - ${currentValue.slice(6, 10)}`)
        }
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    return (
        <Section id="contact">
            <SectionHeader>
                <h2>Get in touch</h2>
                <p>Lets Talk about your project</p>
            </SectionHeader>
           
            <Container>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
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
                        // const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
                        const phoneRegex = /^\([0-9]{3}\)\s[0-9]{3}\s-\s[0-9]{4}$/i;
                        const errors = {};
                        console.info(values)
                        if(!values.name) {
                            errors.name = 'Name Required'
                        }
                        if(!values.email) {
                            errors.email = 'Required'
                        } else if ( !emailRegex.test(values.email)) {
                            errors.email = 'Invalid Email Address'
                        }
                        normalizePhoneInput()
                        if(!phoneRegex.test(values.phone)) {
                            errors.phone = 'Invalid Phone Number'
                        }
                        // if(!values.message) {
                        //     errors.message = 'Message Required'
                        // }
                        return errors;
                    }}
                >
                {() => (
                    <ContactForm name="contact-demo" data-netlify={true} data-netlify-honeypot="bot-field">
                        <FloatingLabel>
                            <Field name="name" placeholder=" " data-lpignore="true"></Field>
                            <label htmlFor="name"><IoPersonOutline/>Name</label>
                            <span className="errorMessage"><ErrorMessage name="name"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field name="email" placeholder=" " data-lpignore="true"></Field>
                            <label htmlFor="email"><AiOutlineMail/>Email</label>
                            <span className="errorMessage"><ErrorMessage name="email"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field id="contact_phone" name="phone" placeholder=" " value={previousValue} data-lpignore="true"></Field>
                            <label htmlFor="phone"><AiOutlinePhone/>Phone</label>
                            <span className="errorMessage"><ErrorMessage name="phone"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field className={floatSelect ? 'active' : ''} as="select" name="help" defaultValue="" onChange={handleSelectClick}>
                                <option value=""></option>
                                <option value="1">Question 1</option>
                                <option value="2">Question 2</option>
                            </Field>
                            <label htmlFor="help"><AiOutlineQuestionCircle/>How Can We Help?</label>
                        </FloatingLabel>

                        <FloatingLabel>
                            <Field name="message" as="textarea" placeholder=" "></Field>
                            <label htmlFor="message"><RiMessage2Line/>Your Message</label>
                            <span className="errorMessage"><ErrorMessage name="message"/></span>
                        </FloatingLabel>

                        <ContactFormButton as="button" type="submit" primary="true" round="true">Send</ContactFormButton>
                    </ContactForm>
                )}
                </Formik>
            </Container>
        </Section>
        
    )
}

export default ContactFormSection

const ContactForm = styled(Form)`
    display: flex;
    flex-flow: column;
    width: clamp(260px, 40vw, 40vw);
    padding: 5rem 0;
`

const ContactFormButton = styled(Button)`
    width: 8vw;
    margin-left: auto;
    padding: 0.75rem;
`

