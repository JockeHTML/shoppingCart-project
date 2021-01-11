import React from 'react';
import styles from "./About.module.css";

import { Link } from "react-router-dom";

function About(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about}>
                <div className={styles.heading}>
                    <h1>ABOUT</h1>
                </div>
                <div className={styles.aboutInfo}>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita rerum sint rem quisquam. Possimus officiis eligendi quos pariatur earum vel.</p>
                <br/>
                <h3>Lorem ipsum dolor sit amet. Magni, nesciunt!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus neque, dolores nesciunt perspiciatis veniam explicabo quisquam omnis vel recusandae.</p>
                </div>
                <div className={styles.button}>
                    <Link to="/home"> BACK TO HOME </Link>
                </div>
            </div> 
        </div>
    );
}

export default About;