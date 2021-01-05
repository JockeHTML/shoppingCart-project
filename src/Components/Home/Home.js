import React from 'react';
import styles from "./Home.module.css"

import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageDiv}>
            <div className={styles.heading}>
                <h1>Get Your Shoes</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, libero?</h3>
            </div>  
            <div className={styles.button}>
                <Link to="/products"> PRODUCTS </Link>
            </div>
            </div>
            
        </div>
    );
}

export default Home;