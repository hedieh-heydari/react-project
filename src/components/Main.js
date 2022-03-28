import React, {useState} from 'react';
import {Form, Button, Container,Input, Label, FormGroup, Table, Card, Row, Col} from 'reactstrap';
import {v4} from 'uuid';




const Main = () => {
    const [title, setTitle] = useState([]);
    const [desc, setDesc] = useState([]);
    const [store, setStore] = useState([]);

    const clickHandler = e => {
     e.preventDefault();
     setStore([...store, {title, desc}]);
    }
 
    return (
        <>
        <Container>
            <Row className='mt-3 mb-3'>
              <Col className='col-sm-12 col-md-6'>
                  <Card>
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
                  </Card>
              </Col>
              <Col className='col-sm-12 col-md-6'>
                      {
                  <Table className='mt-3'>
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
              }
             </Col>
             </Row>
        </Container>

        </>
    );
};

export default Main;