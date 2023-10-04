import React, {useRef} from 'react';
import { SForm, SInput, SButton, SFormControl, SLabel, SFormTitle, SDiv, SDivL, SInputHeight } from './styles';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvn76eh', 'template_1md0jk5', form.current, 'dsnlYoiE9sspgE6Bk')
      .then((result) => {
          alert("message successfully sent. Thank you!")
      }, (error) => {
          alert("message unsuccessful. error:" + error.text);
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
                    <SLabel>Message</SLabel>
                    <SInputHeight type="text" placeholder='Type your message subject' name="message"></SInputHeight>
                </SFormControl>
                <SButton type = "submit">Submit</SButton>
            </SForm>
            </SDivL>
        </SDiv>
    )
}

export default ContactForm;