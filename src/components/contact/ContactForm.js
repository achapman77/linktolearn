import React, {useState} from 'react'
import styled from 'styled-components'

import { FloatingLabel } from '../form/FloatingLabel'
import { Button } from '../buttons/Button'

//form validation
import { Formik, Form, Field, ErrorMessage } from 'formik'

//icons
import { AiOutlineMail, AiOutlinePhone  } from 'react-icons/ai'
import { RiMessage2Line  } from 'react-icons/ri'
import { IoPersonOutline, IoThumbsUpOutline  } from 'react-icons/io5'



const ContactForm = ({content}) => {
    // const [floatSelect, setFloatSelect] = useState(false)
    const [previousValue, setPreviousValue] = useState("")

    // const handleSelectClick = (e) => {
    //     e.preventDefault()
    //     // console.log(e.target.value)
    //     let val = e.target.value
    //     if (val === "") {
    //         setFloatSelect(false)
    //     } else {
    //         setFloatSelect(true)
    //     }
    // }

    const normalizePhoneInput = (e) => {
        setPreviousValue(document.getElementById("phone").value)
        const value = document.getElementById("phone").value
        

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
            setPreviousValue(`(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`)
        }
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }


    const formName = "L2L_webContact"
    return (
        <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    }}
                    onSubmit={
                        (values, actions,e) => {
                            // console.info({e, actions})
                            fetch("/", {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: encode({ "form-name": formName, ...values })
                            })
                            .then(() => {
                                const element = document.getElementById("thankYou");	
                                element.style.opacity = "1";
                                element.style.height = "calc(100%)";
                                actions.resetForm()
                                setPreviousValue('')
                                setTimeout(function(){
                                    element.style.opacity = "0";
                                    element.style.height = "calc(100% - 300px)";
                                }, 2500)
                            })
                            .catch(() => {
                                alert('Something went wrong, please refresh page.');
                            })
                            .finally(() => actions.setSubmitting(false))
                        }
                    }
                    validate={values => {
                        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        // const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
                        const phoneRegex = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/i;
                        const errors = {};
                        // console.info(values)
                        if(!values.name) {
                            errors.name = 'Please Enter Your Name'
                        }
                        if(!values.email) {
                            errors.email = 'Please Enter Your Email'
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
                        name={formName} //IMPORTANT! Also change name in onSubmit -> body: encode({ "form-name": "contact-L2L", ...values }) above
                        data-netlify={true} 
                        data-netlify-honeypot="bot-field"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        aria-label="Send Us a Contact Request"
                    >
                        {/* <FormTitle>
                            <h4>{content.form_title}</h4>
                        </FormTitle> */}
                        <FloatingLabel>
                            <Field id="name" name="name" placeholder=" " data-lpignore="true"></Field>
                            <IoPersonOutline/>
                            <label htmlFor="name">Name*</label>
                            <span className="errorMessage"><ErrorMessage name="name"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field id="email" name="email" placeholder=" " data-lpignore="true"></Field>
                            <AiOutlineMail/>
                            <label htmlFor="email">Email*</label>
                            <span className="errorMessage"><ErrorMessage name="email"/></span>
                        </FloatingLabel>
                        
                        <FloatingLabel>
                            <Field id="phone" name="phone" placeholder=" " value={previousValue} data-lpignore="true"></Field>
                            <AiOutlinePhone/>
                            <label htmlFor="phone">Phone</label>
                            <span className="errorMessage"><ErrorMessage name="phone"/></span>
                        </FloatingLabel>
                        
                        {/* <FloatingLabel>
                            <Field className={floatSelect ? 'active' : ''} as="select" id="quick_help_select" name="quick_help_select" defaultValue="" onChange={handleSelectClick}>
                                <option value="" aria-label="blank"></option>
                                <option value="1">Denver Cadaver Lab Capabilities & Services</option>
                                <option value="2">Mobile Cadaver Lab Capabilities & Services</option>
                                <option value="3">REAL-X Immersive Emergency Medical Learning</option>
                                <option value="4">BEAST Human Performance Analytics</option>
                            </Field>
                            <AiOutlineQuestionCircle/>
                            <label htmlFor="quick_help_select">I Would Like to Learn About:</label>
                        </FloatingLabel> */}

                        <FloatingLabel>
                            <Field id="message" name="message" as="textarea" placeholder=" "></Field>
                            <RiMessage2Line/>
                            <label htmlFor="message">Message</label>
                            <span className="errorMessage"><ErrorMessage name="message"/></span>
                        </FloatingLabel>

                        <ContactFormButton as="button" type="submit" primary="true" round="true">Send</ContactFormButton>
                        <ThankYou id="thankYou">
                            <IoThumbsUpOutline/>
                            <div className="content">
                                <h3>Thank You!</h3>
                                <p>Your message has been sent.</p>
                                <p>Our team will get back to you shortly.</p>
                               
                            </div>
                            
                        </ThankYou>
                    </StyledForm>
                )}
                </Formik>
    )
}

export default ContactForm
const ThankYou = styled.div`
    position: absolute;
    background: #151515;
    color: white;
    width: -webkit-fill-available;
    left: 0;
    top: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    //transition
    opacity: 0;
    height: calc(100% - 100px);
    transition: 150ms all ease-in-out;
    h3 { color: white;}
    svg {
        font-size: 4.5rem;
        margin-right: 1rem;  
    }
    .content {
        display: grid;
        gap: 0.5rem;
    }

`
const StyledForm = styled(Form)`
    position: relative;
    display: flex;
    flex-flow: column;
    width: clamp(500px, 90vw, 600px);
    padding: 5rem 0;
    flex-basis: 50%;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 5rem;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    backdrop-filter: blur(10px);
    border: 1px solid white;
    ${props => props.theme.lg`
        margin: 0;
        min-width: 70vw;
    `}
    ${props => props.theme.sm`
        margin: 1rem 1rem;
        min-width: 85vw;
        padding: 1rem;
    `}
    ${props => props.theme.xs`
        margin:0;
        padding: 1rem 0.5rem;
        min-width: 100vw;
        width: 100vw;
        border: none;
        border-radius: 0;
        button {
            margin-left: 0.5rem;
            width: -webkit-fill-available;
        }
    `}

`

// const FormTitle = styled.div`
//     max-width: 700px;
//     margin-bottom: 2rem;
//     h4 {color: white};
// `

const ContactFormButton = styled(Button)`
    width: clamp(160px, 25vw, 260px);
    max-width: inherit;
    margin-left: auto;
    padding: 0.75rem;
`
