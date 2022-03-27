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
            
            {/* <ContainerFluid> */}
                <Row>
                <Col className="md-3 lg-4 bg-secendary">
                    <Sidebar />
                </Col>
                <Col className="md-9 lg-8 bg-info">
                    <Main/>
                </Col>
                </Row>  
            {/* </ContainerFluid> */}

            <Footer/>
         </>
    );
};

export default Dashboard;