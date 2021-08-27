import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import { FloatingLabel } from '../form/FloatingLabel'
import { Button } from '../buttons/Button'

//form validation
import { Formik, Form, Field, ErrorMessage } from 'formik'


//icons
import { AiOutlineMail, AiOutlinePhone, AiOutlineQuestionCircle  } from 'react-icons/ai'
import { RiMessage2Line  } from 'react-icons/ri'
import { IoPersonOutline  } from 'react-icons/io5'

//animation
import Aos from 'aos'
import "aos/dist/aos.css"

const ContactForm = ({content}) => {
    const [floatSelect, setFloatSelect] = useState(false)
    const [previousValue, setPreviousValue] = useState("")

    const handleSelectClick = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
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
    useEffect( () => {
        Aos.init({})
    }, [])
    return (
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
                        if(!phoneRegex.test(values.phone) && values.phone !=="") {
                            errors.phone = 'Invalid Phone Number'
                        }
                        // if(!values.message) {
                        //     errors.message = 'Message Required'
                        // }
                        return errors;
                    }}
                >
                {() => (
                    <StyledForm 
                        name="contact-demo" 
                        data-netlify={true} 
                        data-netlify-honeypot="bot-field"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                    >
                        <FormTitle>
                            <h4>{content.form_title}</h4>
                        </FormTitle>
                        <FloatingLabel>
                            <Field name="name" placeholder=" " data-lpignore="true"></Field>
                            <IoPersonOutline/>
                            <label htmlFor="name">Name*</label>
                            <span className="errorMessage"><ErrorMessage name="name"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field name="email" placeholder=" " data-lpignore="true"></Field>
                            <AiOutlineMail/>
                            <label htmlFor="email">Email*</label>
                            <span className="errorMessage"><ErrorMessage name="email"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field id="contact_phone" name="phone" placeholder=" " value={previousValue} data-lpignore="true"></Field>
                            <AiOutlinePhone/>
                            <label htmlFor="phone">Phone</label>
                            <span className="errorMessage"><ErrorMessage name="phone"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field className={floatSelect ? 'active' : ''} as="select" name="help" defaultValue="" onChange={handleSelectClick}>
                                <option value=""></option>
                                <option value="1">Question 1</option>
                                <option value="2">Question 2</option>
                            </Field>
                            <AiOutlineQuestionCircle/>
                            <label htmlFor="help">How Can We Help?</label>
                        </FloatingLabel>

                        <FloatingLabel>
                            <Field name="message" as="textarea" placeholder=" "></Field>
                            <RiMessage2Line/>
                            <label htmlFor="message">Your Message</label>
                            <span className="errorMessage"><ErrorMessage name="message"/></span>
                        </FloatingLabel>

                        <ContactFormButton as="button" type="submit" primary="true" round="true">Send It</ContactFormButton>
                    </StyledForm>
                )}
                </Formik>
    )
}

export default ContactForm

const StyledForm = styled(Form)`
    display: flex;
    flex-flow: column;
    width: clamp(500px, 90vw, 600px);
    padding: 5rem 0;
    flex-basis: 50%;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    ${props => props.theme.lg`
        margin: 0;
        min-width: 70vw;
    `}
    ${props => props.theme.sm`
        margin: 1rem 1rem;
        min-width: 85vw;
        padding: 1rem;
    `}

`

const FormTitle = styled.div`
    max-width: 700px;
    margin-bottom: 2rem;
`

const ContactFormButton = styled(Button)`
    width: clamp(160px, 25vw, 260px);
    margin-left: auto;
    padding: 0.75rem;
`
