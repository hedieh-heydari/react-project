import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Aboutus from './components/Aboutus';
import Posts from './components/Posts';
import Addpost from './components/Addpost';
import Main from './components/Main';


function App() {
  return (
 
        <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard/>}>
            <Route path='main' element={<Main/>}/>
            <Route path='addpost' element={<Addpost/>}/>
            <Route path='posts' element={<Posts/>}/>
            <Route path='aboutus' element={<Aboutus/>}/>
           </Route>
        </Routes>
        </div>


    

  );
}

export default App;
