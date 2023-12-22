import './App.css';
import {Routes, Route} from 'react-router-dom'

import User from './Pages/User'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'

const App =()=>
{
  return (
     <>
     <Routes>
     <Route path='/' element={<User/>}/>
     <Route path='/add' element={<Adduser/>}/>
     <Route path='/edit' element={<Edituser/>}/>
     </Routes>
     </>
  );
}

export default App;
