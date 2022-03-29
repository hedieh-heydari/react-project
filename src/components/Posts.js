import React, { useEffect,useState } from 'react';
import { Table, Container } from 'reactstrap';
import { v4 } from 'uuid';

const Posts = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("data")))
     },[]);

    return (
       <>
       <Container>
       <h3>posts</h3>
       <Table className='mt-3'>
                  <thead>
                      <tr>
                          <th>title</th>
                          <th>description</th>
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