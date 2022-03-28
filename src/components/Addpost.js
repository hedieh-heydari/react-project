import React from 'react';
import { Button, Form, FormGroup, Input, Label, Container } from 'reactstrap';

const Addpost = ({title, setTitle, desc, setDesc, store, setStore}) => {
    const clickHandler = e => {
        e.preventDefault();
        setStore([...store, {title, desc}]);
        setTitle("");
        setDesc("");

        console.log("ok")
       }
    return (
        <>
        <Container className='mt-5 mb-5'>
         <h3>Add post</h3>
            <Form>
                <FormGroup>
                  <Label className='form-label' for='title'>Enter title</Label>
                  <Input id='title' name='title' onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder='title' />
                </FormGroup>
                <FormGroup>
                    <Label className='form-label' for='description'>Enter description</Label>
                    <Input id='description' name='description' onChange={e => setDesc(e.target.value)} value={desc} type="text" placeholder='description' />
                </FormGroup>
                  <Button onClick={clickHandler} type='submit' color='info'>Submit</Button>
            </Form>
        </Container>
        </>
    );
};

export default Addpost;