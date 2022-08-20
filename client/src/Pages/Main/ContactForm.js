import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import Error from '../../images/error.png';
import Submit from '../../images/check.png';

const ContactForm = () => {
  const serverId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_API_KEY;

  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    // setFormStatus('Sending...');
    emailjs.sendForm(serverId, templateId, form.current, apiKey).then(
      (result) => {
        form.current.reset();
        setFormStatus('submit');
      },
      (error) => {
        setFormStatus('error');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles['form-container']}>
      <div className={styles['grid-container']}>
        <label className={'sr-only'}>Message</label>
        <textarea
          className={styles['grid-col-span']}
          name='message'
          placeholder='Message'
          required
        />
        <label className={'sr-only'}>Name</label>
        <input type='text' name='user_name' placeholder='Name' required />
        <label className={'sr-only'}>Email</label>
        <input type='email' name='user_email' placeholder='Email' required />
      </div>
      <div className={styles['form-footer']}>
        <div className={styles['form-footer-textbox']}>
          {formStatus === 'submit' && (
            <p className={styles['form-textbox-submit']}>
              <img className={styles['form-textbox-img']} src={Submit} alt='' />
              The form was submitted successfully. Thank you.
            </p>
          )}
          {formStatus === 'error' && (
            <p className={styles['form-textbox-error']}>
              <img className={styles['form-textbox-img']} src={Error} alt='' />
              Error. Please try again later.
            </p>
          )}
        </div>
        <input type='submit' value='Submit' className={styles['form-btn']} />
      </div>
    </form>
  );
};

export default ContactForm;
