import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [loginState , setLoginState] = useState({
    email:"",
    password:"",
    confirmpassword:"",
  })
  const [isValidEmail ,setIsvalidEmail] = useState(false);
  const [isValidPassword ,setIsvalidPassword] = useState(false);
  const [isValidConfirmPassword ,setIsvalidConfirmPassword] = useState(false);
  

  function alerting(){
    if(!loginState.email || !loginState.password || !loginState.confirmpassword)
    {
      alert("Enter a Valid Email and password")
    }else{
        if(loginState.password && loginState.email && loginState.confirmpassword){
          const emailRegex = /\S+@\S+\.\S+/;
          const isValid = emailRegex.test(loginState.email)
          if(isValid){
            setIsvalidEmail(true)
            if(loginState.password.length<8){
                alert("password should contain atleast 7 Characters")
            }else{
              setIsvalidPassword(true);
                if(loginState.password != loginState.confirmpassword){
                    alert("Confirm Password should be same as Password")
                }else{
                  setIsvalidConfirmPassword(true);
                  alert("Sigup Successful")
                }
            }
          }
        }
      }
   
}

  

  return (
  <div className='container mx-5 my-5'>
    {/* {JSON.stringify(loginState)} */}
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className={`form-control ${isValidEmail ? "is-Vaild":"is-inValid"}`} 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    onChange={(event)=>{
      const value = event.target.value;
      setLoginState({...loginState, email: value})
    }}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" 
    className={`form-control ${isValidPassword ? "is-Vaild":"is-inValid"}`} 
    id="exampleInputPassword1"
    onChange={(event)=>{
      const value = event.target.value;
      setLoginState({...loginState, password: value})
    }}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" 
    className={`form-control ${setIsvalidConfirmPassword ? "is-Vaild":"is-inValid"}`}
    id="exampleInputPassword2"
    onChange={(event)=>{
      const value = event.target.value;
      setLoginState({...loginState, confirmpassword: value})
    }}
    />
  </div>
 
  <button type="submit"
   className="btn btn-primary"
   onClick={alerting}
   >
    Sign Up</button>
</form>
  </div>

  )
}

export default App;
