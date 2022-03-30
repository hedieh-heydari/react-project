import React, {useEffect, useState} from 'react';
import {Form, Button, Container,Input, Label, FormGroup, Table, Card, Row, Col} from 'reactstrap';
import {v4} from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const Main = (props) => {
    const [title, setTitle] = useState([]);
    const [desc, setDesc] = useState([]);
    const [store, setStore] = useState([]);

    const clickHandler = e => {
     e.preventDefault();
     setStore([...store, {title, desc}]);
     setTitle("");
     setDesc("");

     localStorage.setItem("data", JSON.stringify([...store, {title, desc}]))

     toast('post added')
    }
 
    useEffect(()=>{
    localStorage.getItem('data') && setStore(JSON.parse(localStorage.getItem("data")))
    },[]);
    console.log(store)

    return (
        <>
        <Container>
            <Row className='mt-3 mb-3'>
              <Col className='col-sm-12 col-md-6 mb-sm-5'>
                  <h5>add post</h5>
                  <Card className='border-0'>
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
                  <ToastContainer/>
                  </Form>
                  </Card>
              </Col>
              <Col className='col-sm-12 col-md-6'>
                  <h5>latest posts</h5>

                  <Table className='mt-3 table-striped'>
                  <thead>
                      <tr>
                          <th>title</th>
                          <th>description</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          store.length > 0 &&
                         store.map(item => {
                              return(
                              <tr key={v4()}>
                              <td>{item.title}</td>
                              <td>{item.desc}</td>
                              </tr>
                              )
                          })
                      }
                  </tbody>
              </Table> 
             </Col>
             </Row>
        </Container>

        </>
    );
};

export default Main;