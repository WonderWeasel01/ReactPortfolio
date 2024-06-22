import React from 'react';
import logo from '../Assets/LogoSolo;
import { Link } from 'react-router-dom';

const styles = {
    container: {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
    },
    heading: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    logo: {
        width: '100px',
        height: '100px',
    },
};

export const Header = () => {
    return (
        <div style={styles.container}>
            <img src={logo} alt="Logo" style={styles.logo} />
            <Link to="/about">
                <h1 style={styles.heading}>About</h1>
            </Link> 
            <h1>Hey</h1>
        </div>
    );
};
