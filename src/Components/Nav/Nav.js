import React, {useState} from 'react';
import styles from "./Nav.module.css"

import {
    Link
  } from "react-router-dom";

function Nav({shoesAdded}) {

    const [ sidebar, setSideBar ] = useState(false);

    const showSidebar = () => {
        setSideBar(!sidebar);
    }

    return (
        <nav className={styles.wrapper}>
            <div className={sidebar ? styles.hamburgerActive : styles.hamburger}>
                <span onClick={showSidebar}>{sidebar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</span>
                {sidebar ? 
                <ul>
                    <li>
                        <i className="fas fa-home"></i>
                        <Link onClick={showSidebar} to="/home"> HOME </Link>
                    </li>
                    <li>
                        <i className="fas fa-question-circle"></i>
                        <Link onClick={showSidebar} to="/contact"> CONTACT </Link>
                    </li>
                    <li>
                        <i className="fab fa-product-hunt"></i>
                        <Link onClick={showSidebar} to="/products"> PRODUCTS </Link>
                    </li>
                    <li>
                        <i className="fas fa-users"></i>
                        <Link onClick={showSidebar} to="/about"> ABOUT </Link>
                    </li>
                    <li>
                        <i className="fas fa-shopping-cart"></i>
                        <Link onClick={showSidebar} to="/cart"> CART </Link>
                    </li>
                </ul> : null }
            </div>
            
                
            
            <div className={styles.links}>
                <h1>JOKÉ SHOES</h1>
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

        </nav>
    );
}

export default Nav;