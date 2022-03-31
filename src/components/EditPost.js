import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditPost = () => {
    const linkStyle = {
        textDecoration: "none"
    }
    const [data, setData] = useState([]);
    const [formInfo,setFormInfo] = useState({});
    const newData=[];

   // Get title from url
   const {title} = useParams();

    const clickHandler =(event => {
        event.preventDefault();
        toast('psot updated')

        // data==localstorage (farghi nadare kodum ro bezari)
        data.forEach((item,index)=>{
         
            if(item.title!==title){
                newData.push(item);
            }
        });
        newData.push(formInfo); 
        setData(newData);
        localStorage.setItem('data',JSON.stringify(newData));
    });

    useEffect(()=>{

        setData(JSON.parse(localStorage.getItem("data")));

        // Find record
        JSON.parse(localStorage.getItem("data")).forEach((item,index)=>{
            if(item.title===title){
              // For show in inputs
                setFormInfo(item);
            }
        });
    },[]);


    return (
        <>
         <h3>Edit your post</h3>
          <Form>
          <FormGroup>
                  <Label className='form-label' for='title'>Enter new title</Label>
                  <Input  id='title' name='title'  value={formInfo.title} onChange={e=>setFormInfo({...formInfo,title:e.target.value})} type="text" placeholder='title' />
          </FormGroup>
          <FormGroup>
                  <Label className='form-label' for='description'>Enter new description</Label>
                  <Input id='description' name='description' value={formInfo.desc} onChange={e=>setFormInfo({...formInfo,desc:e.target.value})} type="text" placeholder='description' />
          </FormGroup>
          <Button className='mb-3' onClick={clickHandler} type='submit' color='info'>
              <Link style={linkStyle} className='text-dark' to='/dashboard/posts'> Submit</Link>
          </Button>
          </Form>
          <ToastContainer/>
        </>
    );
};

export default EditPost;