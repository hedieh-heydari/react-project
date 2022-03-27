import React, {useState} from 'react';
import {Form, Button, Container,Input, Label, FormGroup} from 'reactstrap';




const Main = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const clickHandler = e => {
        e.preventDefault();
       console.log(title);
       console.log(desc);
    }
 
    return (
        <>
    <Container className='m-3'> 
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


    <Container>

     </Container>


        </>
    );
};

export default Main;