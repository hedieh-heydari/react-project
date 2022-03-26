import React from 'react';
import {Container, Button, Form, FormGroup, InputGroup} from 'reactstrap';
import styles from './Login.module.css';
import {BiUser} from 'react-icons/bi';
import {VscLock} from 'react-icons/vsc';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <Container className={styles.container}>
            <Form>
                <FormGroup>
                    <InputGroup >
                    <span className={styles.input}><BiUser/></span>
                    <input className={styles.input} type="text" placeholder='username...' />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                    <span className={styles.input}> <VscLock/></span>
                    <input className={styles.input} type="password" placeholder='password...' />
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