import React from 'react';
import { Layout } from '../Components/Layout';
import FullLogo from '../Assets/WentzelDesign.svg';
import Pc from '../Assets/Pc.svg';

const styles = {
img:{
    width: '100px',
    height: '100px',
},
};

export const HomePage = () => {
    return (
    <Layout>
        <img style={styles.img} src={FullLogo} alt="" />
        <img src={Pc} alt="" />
    </Layout>
    );
};



