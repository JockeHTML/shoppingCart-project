import React, {useState} from 'react';
import styles from "./Nav.module.css"
import {navData} from "../Context/Context";

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
                    {navData.map((data, index) => {
                        return (
                        <li key={index}>
                            <i className={data.icon}></i>
                            <Link onClick={showSidebar} to={data.to}> {data.title} </Link>
                        </li>
                        )
                    })}
                    <li>
                        {shoesAdded.length > 0 ? <span className={styles.menuCartNumber}>{shoesAdded.length}</span> : null}
                        <Link onClick={showSidebar} to="/cart"><i className="fas fa-shopping-cart"></i>CART</Link>
                    </li>
                </ul> : null }
            </div>
            
            <div className={styles.links}>
                <h1>JOKÉ SHOES</h1>
                <ul>
                    {navData.map((data, index) => {
                        return (
                        <li key={index}>
                            <Link to={data.to}> {data.title} </Link>
                        </li>
                        )
                    })}
                    <li>
                        {shoesAdded.length > 0 ? 
                        <span className={styles.cartNumber}>{shoesAdded.length}</span> 
                        : null}
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;