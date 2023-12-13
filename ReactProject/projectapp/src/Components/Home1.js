import {FaBars} from "react-icons/fa";

const Home1=()=>{
    return(
        <>
        <div className="nava1">   
            <button className="leftr"><FaBars/></button>
            <div className="edge2">
                <div className="Tit">
                    <h2>Rotors&Wheels</h2>
        <div className="he1">
        <a>Sign in </a>
        <a>Sign Up </a>
        <a>Location </a>
        </div></div></div></div>
        <div className="edge1"></div>

        <div className="bud1">
            <span><p>Book a Service For Your Vehicle</p></span>
            <p1>You can book your car for the service by filling up the form below</p1>
        </div>
        <div className="bud2">
            <form>
            
            <div>
            <label>Name: </label>
            <input type="text" name="" id="name" placeholder="Name"/>
            </div>
            
            <div>
            <label>EmailId: </label>
            <input type="text" name="" id="emailid" placeholder="Email_Id"/>
            </div>
            <div>
            <label>Mobile: </label>
            <input type="number" name="" id="phone" placeholder="Mobile No"/>
            </div>
            
            <div>
            <label>Model: </label>
            <input type="text" name="" id="name" placeholder="Model"/>
            </div>
            </form>
            <div>
            <label>Service Type: </label>
            <input type="text" name="" id="name" placeholder="ServiceType:"/>
            </div>
            <div>
            <label>State: </label>
            <input type="text" name="" id="name" placeholder="State:"/>
            </div>
            <div>
            <label>City: </label>
            <input type="text" name="" id="name" placeholder="City:"/>
            </div>
            <div>
            <label>Service Appoinment Date: </label>
            <input type="date" name="" id="name" placeholder="Service Appoinment Date:"/>
            </div>
            <div>
            <label>Service Appoinment Time: </label>
            <input type="time" name="" id="name" placeholder="Service Appoinment Time:"/>
            </div>
            <div>
            <label>Registration No: </label>
            <input type="text" name="" id="name" placeholder="Registration No:"/>
            </div>
            <div>
            <label>Odometer(km's): </label>
            <input type="text" name="" id="name" placeholder="Odometer(kms):"/>
            </div>
        </div>
            <div className="in1">
            <label>Service Requirements: </label>
            <input type="text" name="" id="name" placeholder="Service requirements:"/>
            </div>
            <div className="in2">
            <button>Submit</button>
            </div>
        </>
        
    )
}
export default Home1;