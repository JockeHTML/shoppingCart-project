import React from 'react';
import styles from "./Contact.module.css"
import {contactData} from "../Context/Context";
import  { Card, Grid} from "@material-ui/core";
import { Link } from "react-router-dom";

function Contact(props) {
    return (
    <div className={styles.wrapper}>
        <div className={styles.contact}>
            <div className={styles.heading}>
                <h1>CONTACT</h1>
            </div>
                <Grid item container justify={"center"} spacing={4}>
                    {contactData.map((contact, index) => {
                        return (
                        <Grid key={index} className={styles.card} component={Card} item xs={10} md={3} lg={2}>
                            <span>
                                <i className={contact.icon}></i>
                            </span>
                                <h2>{contact.title}</h2>
                                <p>{contact.phone}</p>
                                <p>{contact.time}</p>
                                <p>{contact.days}</p>
                                <p>{contact.homepage}</p>
                        </Grid>
                        )
                    })}
                </Grid>
                <div className={styles.button}>
                    <Link to="/home"> BACK TO HOME </Link>
                </div>
        </div>
    </div>
    );
}

export default Contact;