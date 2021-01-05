import React from 'react';
import styles from "./Contact.module.css"

import  { Card, Grid} from "@material-ui/core";
import { Link } from "react-router-dom";



function Contact(props) {
    return (
    <div className={styles.wrapper}>
        <div className={styles.contact}>
            <div className={styles.heading}>
                <h1>CONTACT</h1>
            </div>
            <Grid container justify={"center"} spacing={4}>
                    <Grid className={styles.grid} component={Card} item xs={11} md={3} lg={3}>
                    <div className={styles.card}>
                        <span><i className="fas fa-mobile-alt"></i></span>
                        <h2>PRODUCTS</h2>
                        <p>+46070123456</p>
                        <p>9:00 - 18:00</p>
                        <p>Monday - Saturday</p>
                    </div>
                    </Grid>
                    <Grid className={styles.grid} component={Card} item xs={11} md={3} lg={3}>
                    <div className={styles.card}>
                        <span><i className="fas fa-mobile-alt"></i></span>
                        <h2>BILLING</h2>
                        <p>+46070123456</p>
                        <p>9:00 - 18:00</p>
                        <p>Monday - Saturday</p>
                    </div>
                    </Grid>
                    <Grid className={styles.grid} component={Card} item xs={11} md={3} lg={3}>
                    <div className={styles.card}>
                        <span><i className="fas fa-mobile-alt"></i></span>
                        <h2>DELIVERY</h2>
                        <p>+46070123456</p>
                        <p>9:00 - 18:00</p>
                        <p>Monday - Saturday</p>
                    </div>
                    </Grid>
                </Grid>
                <div className={styles.button}>
                    <Link to="/home"> BACK TO HOME </Link>
                </div>
    </div>
    </div>
    );
}

export default Contact;