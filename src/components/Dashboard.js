import React from 'react';



//components
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = () => {
    return (
        <div>
            <Navigation/>
            <div style={{display: "flex"}}>
            <Main/>
            <Sidebar/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Dashboard;