import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthProvider";

const SignUp = () => {
    const [role, setRole] = useState('buyer');
    const {createNewUser, googleSignIn, profileUpdate} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider();
    const handleUser=(e)=>{
        setRole(e.target.value)
      }
    //  const role = role;


    const handleSignUpForm = event => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;
     


      const userData = {
        name, 
        email, 
        role
      }
      setErrorMessage('')
      createNewUser(email, password)
      .then(result => {
        const user =result.user
        console.log(user)
        profileUpdate(name)
        .then( () => {})
        .catch(err => {
          console.log(err)
          setErrorMessage(err.message)
        })
        saveUserData(userData)
        form.reset()

      })
      .catch(err => {
        console.log(err.message)
        setErrorMessage(err.message)
      })
      
      
    }
    const handleGoogleLogin = () => {
      googleSignIn(provider)
      .then(result => {
        const user = result.user;
        const email = user.email
        const name = user.displayName
        console.log(user)
        saveUserData({ role, email, name})
      }).catch(err => {
        console.log(err)
        setErrorMessage(err.message)
      })
    }
     
 

    const saveUserData = (userData) => {
      fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          navigate('/')
        }
        console.log(data)        
      })
      
    }
     
   
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hero">
        <div className="hero-content w-full lg:w-1/2">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div  className="card-body">
              <h2 className="text-center text-primary font-bold text-3xl mb-4">Create Account</h2>
              
            <div>
              <button className="flex items-center btn btn-outline btn-error gap-x-4 w-full text-white"
              onClick={handleGoogleLogin}
              ><FaGoogle className="text-2xl hover:text-white"/> Google SignUp</button>
            </div>
            <span className="text-center font-semibold text-gray-500 mt-3">or use your email for Signup</span>

           {errorMessage && <p className="text-red-600 font-bold text-center "> {errorMessage}</p>}
            <form onSubmit={handleSignUpForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
               
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
             <div className="flex gap-6 mt-3">

             <div className="flex items-center gap-x-3">
              <input type="radio" name="role" id='buyer' value="buyer" className="radio radio-primary" onChange={handleUser}  required 
              checked={role === 'buyer'} />
             <label htmlFor="buyer"> Buyer</label>
              </div>

              <div className="flex items-center gap-x-3">
              <input type="radio" name="role" id="seller" value="seller" className="radio radio-primary" onChange={handleUser} required  checked={role === 'seller'}/>
            <label htmlFor="seller">Seller</label>
              </div>
             </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-error text-white">Signup</button>
              </div>
            </form>
            <p className="text-gray-600 ">Already have account <Link to="/signin" className="text-primary font-semibold">Signin</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
