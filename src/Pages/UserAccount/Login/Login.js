import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthProvider";

const SignUp = () => {
    const {userLogin} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    


    const handleSignUpForm = event => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
     
    userLogin(email, password)
    .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, {replace: true})
    })
    .catch(err => {
        setErrorMessage(err.message)
    })

     
      setErrorMessage('')
      
    }
 

   
     
   
  return (
    <div className="w-3/4 mx-auto flex items-center justify-center h-screen">
      <div className="hero">
        <div className="hero-content w-1/2">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div  className="card-body">
              <h2 className="text-center text-primary font-bold text-3xl mb-4">Login</h2>
              
           
            <span className="text-center font-semibold text-gray-500 mt-3">Use Your Email for SignIn</span>

           {errorMessage && <p className="text-red-600 font-bold text-center "> {errorMessage}</p>}
            <form onSubmit={handleSignUpForm}>
              
               
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-error text-white" type="submit">SignIn</button>
              </div>
            </form>
            <p className="text-gray-600 ">You are new to  <Link to="/signup" className="text-primary font-semibold">Crete Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
