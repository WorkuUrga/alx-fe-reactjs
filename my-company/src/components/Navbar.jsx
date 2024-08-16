import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/About" style={styles.link}>About</Link>
                </li>
                <li>
                    <Link to="/Services" style={styles.link}>Services</Link>
                </li>
                <li>
                    <Link to="/Contact" style={styles.link}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '15px',
    },
    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        padding: '10px 20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    }
};

export default Navbar;
