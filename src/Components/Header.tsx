import React from 'react';
import logo from '../Assets/LogoSolo.svg'
import { Link } from 'react-router-dom';

const styles = {
    container: {
        backgroundColor: '#151f2e',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: '20px',
    },
    heading: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textdecoration: 'none',
        underline: 'none',


    },
    logo: {
        width: '100px',
        height: '100px',
    },
    link: {
        textDecoration: 'none',
    },
};

export const Header = () => {
    return (
        <div style={styles.container}>
            <Link style={styles.link} to="/Projects">
                <h1 style={styles.heading}>Projects</h1>
            </Link> 
            
            <Link style={styles.link} to="/">
                <img src={logo} alt="Logo" style={styles.logo} />
            </Link>

            <Link style={styles.link} to="/about">
                <h1 style={styles.heading}>About</h1>
            </Link> 
        </div>
    );
};
