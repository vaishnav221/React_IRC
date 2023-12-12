import './Assets/Style.css' 

import Nav from './Components/Nav'

function App(){
    return(
    <div>
           <form>
           
           <input type="text" name="name" id="name" placeholder="username" class="sam"/>
          
           <input type="email" name="email" id="email" placeholder="email address" class="sam"/>
          
           <input type="number" name="phone" id="mobile" placeholder="mobile" class="sam"/>
     
           <input type="date" name="dob" id="dob" class="sam"/>
     
           <input type="password" name="pass" id="pass" placeholder="password" class="sam"/>
           <input type="password" name="pass1" id="pass1" placeholder="confirm password" class="sam"/>

           <input type="submit" value="submit" class="sam saam"/>
           </form>
    </div>
    )
}
export default App