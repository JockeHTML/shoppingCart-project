import React from 'react';
import styles from "./Nav.module.css"

import {
    Link
  } from "react-router-dom";

function Nav({shoesAdded}) {

    return (
        <header className={styles.wrapper}>
            <div className={styles.title}>
                <h1>SHOES</h1>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <Link to="/home"> HOME </Link>
                    </li>
                    <li>
                        <Link to="/contact"> CONTACT </Link>
                    </li>
                    <li>
                        <Link to="/products"> PRODUCTS </Link>
                    </li>
                    <li>
                        <Link to="/about"> ABOUT </Link>
                    </li>
                    <li>
                        {shoesAdded.length > 0 ? <span className={styles.cartNumber}>{shoesAdded.length}</span> : null}
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Nav;