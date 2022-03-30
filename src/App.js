import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Aboutus from './components/Aboutus';
import Posts from './components/Posts';
import Main from './components/Main';
import EditPost from './components/EditPost';

function App() {
  return (
 
        <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard/>}>
            <Route path='main' element={<Main/>}/>
            <Route path='aboutus' element={<Aboutus/>}/>
            <Route path='posts' element={<Posts/>}>
             <Route path='editpost' element={<EditPost/>} />
            </Route>
            
           </Route>
        </Routes>
        </div>


    

  );
}

export default App;
