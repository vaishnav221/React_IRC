import {Link} from 'react-router-dom'

function register(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let num = document.getElementById("mobile").value;
    let Dob = document.getElementById("dob").value;
    let pass = document.getElementById("pass").value;
    let pass1 = document.getElementById("pass1").value;
   
        if(pass === pass1)
        {
            alert(
                "password matched"+"\n"+
                "Name: "+name+"\n"+
                "Email: "+email+"\n"+
                "Mobile: "+num+"\n"+
                "DOB: "+Dob+"\n"+
                "Password: "+pass+"\n"
                );
            }
            else{
                alert("password mismatch");
            }
        
        
}

const Signin=()=>{
    return(
    <div className="b1">

        <form className="fl1" >
        <div className="hed">Sign Up
           
           <input type="text" name="name" id="name" placeholder="username" class="sem"/>
          
           <input type="email" name="email" id="email" placeholder="email address" class="sem"/>
          
           <input type="number" name="phone" id="mobile" placeholder="mobile" class="sem"/>
     
           <input type="date" name="dob" id="dob" class="sam"/>
     
           <input type="password" name="pass" id="pass" placeholder="password" class="sem"/>
           <input type="password" name="pass1" id="pass1" placeholder="confirm password" class="sem"/>

           </div>
           <Link to='/'>
           <input onSubmit={register} type="submit" value="Submit" class="seem"/></Link>
           </form>
    </div>
    )
}
export default Signin;