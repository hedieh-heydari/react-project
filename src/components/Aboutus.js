import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import pic from '../images/team.jpg'

const Aboutus = () => {
    return (
        <>
        <Container className='mt-5'>
            <Row>
                <Col className='col-sm-12 col-md-6'>
                    <h3>About us page</h3>
                    <p>CEO:</p>
                    <p>employees:</p>
                </Col>
                <Col className='col-sm-12 col-md-6'>
                    <img src={pic} alt='team' height='250px' width='300px' />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Aboutus;