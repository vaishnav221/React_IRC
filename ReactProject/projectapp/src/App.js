import './App.css';
import Home1 from './Components/Home1';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import './Assets/CSS/Home1.css';
import './Assets/CSS/Signup.css';
import './Assets/CSS/Login.css';
import {Routes ,Route} from "react-router-dom"
function App() {
  return (
  <div className="App">
      <Routes>
        <Route path = "/" element ={<Home1/>}/>
        <Route path = "/Login" element ={<Login/>}/>
        <Route path = "/SignUp" element ={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
