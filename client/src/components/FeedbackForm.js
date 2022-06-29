import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import database from "../firebase-config.js";

const FeedbackForm = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { name, email, message } = userData;
    const handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = ref(database);
        const newData = { ...userData };

        push(dbRef, newData);
        console.log('submit');
        setUserData({
            name: "",
            email: "",
            message: ""
        })
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        console.log(name, value);
        setUserData({ ...userData, [name]: value })

    }
    return (
        <div>
            <form id="feedbackForm" className='feedbackForm' onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Name</label> */}
                <input
                    type="text"
                    className='form-control'
                    id='name'
                    name="name"
                    placeholder='Name'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    className='form-control'
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleInputChange}
                />
                <textarea
                    type="text"
                    className='form-control'
                    name="message"
                    placeholder='Message'
                    value={message}
                    onChange={handleInputChange}
                />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
};

export default FeedbackForm;