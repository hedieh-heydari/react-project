import React from 'react';
import {Container, Button, Form, FormGroup, InputGroup, Input, InputGroupText} from 'reactstrap';
import styles from './Login.module.css';
import {BiUser} from 'react-icons/bi';
import {VscLock} from 'react-icons/vsc';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <Container d-flex justify-content-center align-items-center>
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
                <Link to="/dashboard" className={styles.link}>
                    <Button block color='info'>Login</Button>
                </Link>
            </Form>
        </Container>
    );
};

export default Login;