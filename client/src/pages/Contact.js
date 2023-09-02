import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import BGWave from '../components/BGWave';
import { SDiv } from '../components/styles';

const Contact = () =>{
    return (
        <SDiv>
            <BGWave/>
            <Header/>
            <ContactForm/>
            <Footer/>
        </SDiv>
    )
}

export default Contact;