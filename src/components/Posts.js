import React, { useEffect,useState } from 'react';
import { Table, Container, Button } from 'reactstrap';
import { v4 } from 'uuid';
import {VscTrash, VscEdit} from 'react-icons/vsc'
import { Link} from 'react-router-dom';

const Posts = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("data")))
     },[]);

     const removeHandler = title=>{
        //===== Method 1 =====
        let newData = [];
        data.forEach(item=>{
                 if(item.title !== title){
                     newData.push(item);
                 }
         });

         localStorage.setItem('data',JSON.stringify(newData));
         setData(JSON.parse(localStorage.getItem("data")));
         //===== Method 1 =====

         //===== Method 2 =====
            // Use built in javascript method like filter,map and etc.
         //===== Method 2 =====
     }

     const editHandler = title => {
        console.log("edit");
        
        
     }

    return (
       <>
       <Container>
       <h3>posts</h3>
       <Table className='mt-3 table-striped'>
                  <thead>
                      <tr>
                          <th>title</th>
                          <th>description</th>
                          <th>edit</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          data.length > 0 &&
                         data.map(item => {
                              return(
                              <tr key={v4()}>
                              <td>{item.title}</td>
                              <td>{item.desc}</td>
                              <td>
                              <Button onClick={editHandler} className='me-2 btn-light btn-outline-info'>
                                  <Link to='/editpost'><VscEdit/></Link>
                             </Button>
                              <Button onClick={()=>removeHandler(item.title)} className='me-2 btn-light btn-outline-info'> <VscTrash/></Button>
                              </td>
                              </tr>
                              )
                          })
                      }
                      
                  </tbody>
              </Table> 
            
            
       </Container>



   
       </>
    );
};

export default Posts;