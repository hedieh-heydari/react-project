import React from 'react';
import {Container, Button, Form, FormGroup, InputGroup, Input, InputGroupText} from 'reactstrap';
import {BiUser} from 'react-icons/bi';
import {VscLock} from 'react-icons/vsc';
import {Link} from 'react-router-dom'

const Login = () => {
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <Container className="d-flex justify-content-center align-content-center mt-5">
            <Form>
                <FormGroup>
                    <InputGroup >
                    <InputGroupText><BiUser/></InputGroupText>
                    <Input type="text" placeholder='username...' />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                    <InputGroupText><VscLock/></InputGroupText>
                    <Input  type="password" placeholder='password...' />
                    </InputGroup>
                </FormGroup>
                <Link to="/dashboard" style={linkStyle}>
                    <Button block color='info'>Login</Button>
                </Link>
            </Form>
        </Container>
    );
};

export default Login;