import React, { useEffect,useState } from 'react';
import { Table, Container, Button } from 'reactstrap';
import { v4 } from 'uuid';
import {VscTrash, VscEdit} from 'react-icons/vsc'
import { Link, Outlet  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Posts = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
       localStorage.getItem('data') && setData(JSON.parse(localStorage.getItem("data")))
     },[]);

        const removeHandler = title=>{
            toast('post deleted')
            let newData = [];
            data.forEach(item=>{                     
                    if(item.title !== title){
                        newData.push(item);
                    }
            });
            localStorage.setItem('data',JSON.stringify(newData));
            setData(JSON.parse(localStorage.getItem("data")));
        }
        
        const editHandler = title => {
            data.forEach(item => {
                if(item.title === title) {
                    setData(item)
                }
            })
            console.log(data)
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
                              <Button onClick={()=>editHandler(item)} className='me-2 btn-light btn-outline-info'>
                                  <Link to={`editpost/${item.title}`}><VscEdit/></Link>
                             </Button>
                              <Button onClick={()=>removeHandler(item.title)} className='me-2 btn-light btn-outline-info'> <VscTrash/></Button>
                              </td>
                              </tr>
                              )
                            })
                        }
                  </tbody>
              </Table> 
                        <ToastContainer/>
              <Outlet/>
       </Container>
       </>
    );
};

export default Posts;