import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <Container className='m-3'>
            <Col>
                <Row className='mb-2'>
                    <Link to='posts' className='text-dark' style={linkStyle}>Posts</Link>
                </Row>
                <Row className='mb-2'>
                    <Link to='aboutus' className='text-dark' style={linkStyle}>About us</Link>
                </Row>
            </Col>
        </Container>
    );
};

export default Sidebar;