import {Link} from 'react-router-dom'

const Login=()=>{
    return(
        <>
        <div className="gre">
            <form className="fr1">
            <h2>Login</h2>
            <input type="text" name="" id="uname" placeholder="username" class="sam" required/>
            <input type="email" name="" id="email" placeholder="email"  class="sam" required/>
            <input type="password" name="" id="pass"  placeholder="password" class="sam" required/>
            <Link to='/'>
            <input type="submit" value="Submit" class="crate"/></Link>
            </form>
        </div>
        </>
    )
}
export default Login