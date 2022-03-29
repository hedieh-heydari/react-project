import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditPost = () => {
    const clickHandler =(event => {
        event.preventDefault();
        console.log("ok")
    })
  
    return (
        <>
        <Navigation/>
        <Row className='mt-3'>
            <Col  className="col-sm-2 col-md-3">
                 <Sidebar/>
            </Col>
            <Col  className="col-sm-10 col-md-9">
              <h3>Edit your post</h3>
                  <Form>
                  <FormGroup>
                          <Label className='form-label' for='title'>Enter new title</Label>
                          <Input id='title' name='title'  type="text" placeholder='title' />
                  </FormGroup>
                  <FormGroup>
                          <Label className='form-label' for='description'>Enter new description</Label>
                          <Input id='description' name='description'  type="text" placeholder='description' />
                  </FormGroup>
                  <Button className='mb-3' onClick={clickHandler} type='submit' color='info'>Submit</Button>
                  </Form>
            </Col>
        </Row>
        <Footer/>
        </>
    );
};

export default EditPost;