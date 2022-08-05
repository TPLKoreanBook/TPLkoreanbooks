import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from './LoadingPage.module.css';


// const container = {
//     show: {
//         transition: {
//             staggerCh
//         }
//     }
// }

const item = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.6,
        }
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: .8
        }
    }

}

const LoadingPage = () => {
    useEffect(() => {

    }, [])
    return (
        <div
            className={styles['loading-container']}>
            <h1>Hello</h1>
        </div>
    );
};

export default LoadingPage;