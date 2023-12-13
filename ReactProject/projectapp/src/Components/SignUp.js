import {Link} from 'react-router-dom'
const Signin=()=>{
    return(
    <div className="b1">

        <form className="fl1">
        <div className="hed">Sign Up
           
           <input type="text" name="name" id="name" placeholder="username" class="sem"/>
          
           <input type="email" name="email" id="email" placeholder="email address" class="sem"/>
          
           <input type="number" name="phone" id="mobile" placeholder="mobile" class="sem"/>
     
           <input type="date" name="dob" id="dob" class="sam"/>
     
           <input type="password" name="pass" id="pass" placeholder="password" class="sem"/>
           <input type="password" name="pass1" id="pass1" placeholder="confirm password" class="sem"/>

           </div>
           <Link to='/'>
           <input type="submit" value="Submit" class="seem"/></Link>
           </form>
    </div>
    )
}
export default Signin;