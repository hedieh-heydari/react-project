import React, { useEffect } from 'react';
import { Table, Container } from 'reactstrap';
// import { v4 } from 'uuid';



 
const Posts = ({title, desc, store, settitle, setDesc, setStore}) => {

    // useEffect(()=>{
    //     setStore(JSON.parse(localStorage.getItem("data")))
    //     },[]);

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
                      {/* { 
                        store.lenght > 0 &&
                         store.map(item => {
                              return(
                              <tr key={v4()}>
                              <td>{item.title}</td>
                              <td>{item.desc}</td>
                              </tr>
                              )
                          })
                      } */}
                  </tbody>
              </Table>
       </Container>
       </>
    );
};

export default Posts;