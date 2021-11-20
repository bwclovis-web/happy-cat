import * as React from "react"
import useFormHook from "../../../lib/useForm"
import Button from "../../Button/Button"
import StyledContactForm from "./ContactFormStyles"
import { useForm, ValidationError } from '@formspree/react';


const ContactUsForm = () => {
    const {inputs, handleChange, resetForm} = useFormHook({
        name: '',
        email: '',
        message: ''
    })

    const [state, handleSubmit] = useForm("mwkagjzb");

    React.useEffect(() => {
        if (state.succeeded) {
            resetForm();
        }
    }, [state])
    
    return (
        <StyledContactForm onSubmit={handleSubmit}>
            <fieldset aria-busy={state.submitting}>
                    <legend className="h2">Drop us a message</legend>
                    <div className="input-container">
                        <input 
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={inputs.name}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-container">
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={inputs.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className="input-container">
                    <label htmlFor="email">Message</label>
                        <textarea 
                            id="message"
                            rows="5"
                            name="message"
                            value={inputs.message}
                            onChange={handleChange}
                        />
                        
                    </div>
                </fieldset>
                <Button
                    pos='center'
                    type="submit"
                    disabled={state.submitting}
                    submitStatus={state}
                >
                    {state.succeeded ? `MESSAGE RECEIVED` : 'SAY HELLO'}
                </Button>
        </StyledContactForm>
    )
}

export default ContactUsForm