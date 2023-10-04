import React, {useRef} from 'react';
import { SForm, SInput, SButton, SFormControl, SLabel, SFormTitle, SDiv, SDivL } from './styles';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvn76eh', 'template_1md0jk5', form.current, 'dsnlYoiE9sspgE6Bk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


    return(
        <SDiv>
            <SDivL>
            <SForm ref={form} onSubmit={sendEmail}>
                <SFormTitle>Contact Form</SFormTitle>
                <SFormControl>
                    <SLabel>Email</SLabel>
                    <SInput type="text" placeholder='Type your email' name="user_email"></SInput>
                    <SLabel>Subject</SLabel>
                    <SInput type="text" placeholder='Type your message subject' name="message"></SInput>
                </SFormControl>
                <SButton type = "submit">Submit</SButton>
            </SForm>
            </SDivL>
        </SDiv>
    )
}

export default ContactForm;