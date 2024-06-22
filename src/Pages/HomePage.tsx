import React from 'react';

import logo from '../logo.svg';
import { Link } from 'react-router-dom';



/*export const HomePage = () => {
    return (
        <div>
            <Header />
            <h1>Hey</h1>
        </div>
          
 
    );
};*/

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

export const HomePage = () => {
    return (
        <div style={styles.container}>
            <img src={logo} alt="Logo" style={styles.logo} />
            <Link to="/about">
                <h1 style={styles.heading}>About</h1>
            </Link> 
        </div>
    );
};



