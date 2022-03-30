import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

const EditPost = () => {
    const linkStyle = {
        textDecoration: "none"
    }
    const [data, setData] = useState([]);
    // setData(JSON.parse(localStorage.getItem("data")));

    const clickHandler =(event => {
        event.preventDefault();
        // toast("post deleted")

        // data.foreach((item, index) => {
        //     if (event.id === item.id) {
        //         data.splice(index, 1, event)
        //     }
        // })
        // localStorage.setItem("data", JSON.stringify('data'))
    })
  
    return (
        <>
         <h3>Edit your post</h3>
          <Form>
          <FormGroup>
                  <Label className='form-label' for='title'>Enter new title</Label>
                  <Input  id='title' name='title'  type="text" placeholder='title' />
          </FormGroup>
          <FormGroup>
                  <Label className='form-label' for='description'>Enter new description</Label>
                  <Input  id='description' name='description' type="text" placeholder='description' />
          </FormGroup>
          <Button className='mb-3' onClick={clickHandler} type='submit' color='info'>
              <Link style={linkStyle} className='text-dark' to='/dashboard/posts'> Submit</Link>
          </Button>
          </Form>
          {/* <ToastContainer/> */}
        </>
    );
};

export default EditPost;