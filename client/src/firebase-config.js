
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"



const firebaseConfig = {

    apiKey: "AIzaSyAaf1gum7bqncS5yEVbTRapY51KRxvFjU0",

    authDomain: "feedback-form-27d62.firebaseapp.com",

    projectId: "feedback-form-27d62",

    storageBucket: "feedback-form-27d62.appspot.com",

    messagingSenderId: "873066528150",

    appId: "1:873066528150:web:5c8e4b506717db649df1b7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;