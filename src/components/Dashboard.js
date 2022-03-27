import React from 'react';
import {Row, Col} from 'reactstrap'


//components
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = () => {
    return (
        <>
            <Navigation/>

                <Row>
                <Col className="col-sm-2 col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-sm-10 col-md-9 ">
                    <Main/>
                </Col>
                </Row>  

            <Footer/>
         </>
    );
};

export default Dashboard;