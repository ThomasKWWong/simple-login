import React from 'react';
import { SForm, SInput, SButton, SFormControl, SLabel, SFormTitle, SDiv, SDivL } from './styles';

const ContactForm = () => {
    return(
        <SDiv>
            <SDivL>
            <SForm>
                <SFormTitle>Contact Form</SFormTitle>
                <SFormControl>
                    <SLabel>Email</SLabel>
                    <SInput type="text" placeholder='Type your email'></SInput>
                    <SLabel>Subject</SLabel>
                    <SInput type="text" placeholder='Type your message subject'></SInput>
                </SFormControl>
                <SButton type = "submit">Submit</SButton>
            </SForm>
            </SDivL>
        </SDiv>
    )
}

export default ContactForm;