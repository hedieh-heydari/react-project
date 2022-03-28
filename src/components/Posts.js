import React from 'react';
import { Table, Container } from 'reactstrap';

 
const Posts = () => {
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
                  </tbody>
              </Table>
       </Container>
       </>
    );
};

export default Posts;