import React from 'react';
import {Row, Col, Container} from 'reactstrap'


//components
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = () => {
    return (
        <>
            <Navigation/>
            
            <Container>
                <Row>
                <Col>
                    <Sidebar />
                </Col>
                <Col>
                    <Main/>
                </Col>
                </Row>  
            </Container>

            <Footer/>
         </>
    );
};

export default Dashboard;