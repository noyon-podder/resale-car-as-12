import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
    const [userRole, setUserRole] = useState('buyer');
    
    
    const handleUser=(e)=>{
        setUserRole(e.target.value)
      }

    const handleSignUpForm = event => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;
      const role = userRole;


      console.log(name, email, password, role)
    }
     
     
    
  return (
    <div className="w-3/4 mx-auto flex items-center justify-center h-screen">
      <div className="hero">
        <div className="hero-content w-1/2">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div  className="card-body">
              <h2 className="text-center text-primary font-bold text-3xl mb-4">Create Account</h2>
              
            <div>
              <button className="flex items-center btn btn-outline btn-primary gap-x-4 w-full text-white"><FaGoogle className="text-2xl hover:text-white"/> Google SignUp</button>
            </div>
            <span className="text-center font-semibold text-gray-500 mt-3">or use your email for regestration</span>
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
              checked={userRole === 'buyer'} />
             <label htmlFor="buyer"> Buyer</label>
              </div>

              <div className="flex items-center gap-x-3">
              <input type="radio" name="role" id="seller" value="seller" className="radio radio-primary" onChange={handleUser} required  checked={userRole === 'seller'}/>
            <label htmlFor="seller">Seller</label>
              </div>
             </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Signup</button>
              </div>
            </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
