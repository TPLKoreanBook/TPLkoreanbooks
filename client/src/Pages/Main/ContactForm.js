import React, { useRef, } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const serverId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const apiKey = process.env.REACT_APP_API_KEY;


    const form = useRef();
    // const [formStatus, setFormStatus] = useState('Submit');

    const sendEmail = (e) => {
        e.preventDefault();
        // setFormStatus('Sending...');
        emailjs.sendForm(serverId, templateId, form.current, apiKey)
            .then((result) => {
                console.log(result);
                console.log(result.text);
                form.current.reset();
                // setFormStatus('Submit')

            }, (error) => {
                console.log(error.text);
            });


    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles['form-container']}>
            <div className={styles['grid-container']}>
                <label className={'sr-only'}>Message</label>
                <textarea className={styles['grid-col-span']} name="message" placeholder='Message' required />
                <label className={'sr-only'}>Name</label>
                <input type="text" name="user_name" placeholder='Name' required />
                <label className={'sr-only'}>Email</label>
                <input type="email" name="user_email" placeholder='Email' required />
            </div>

            <input type="submit" value="Submit" className={styles['form-btn']} />
        </form>
    );
};

export default ContactForm