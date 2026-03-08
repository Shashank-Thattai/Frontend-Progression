import React from 'react'
import useAuth from './AuthContext';

const LoginForm = () => {
    const{login} =useAuth();

    function handleSubmit(event){
        event.preventDefault();
        login({
            name:event.target.name.value,
            email:event.target.email.value
        })

    }
    
  return (
   <>
        <form onSubmit={handleSubmit}>

            <input type='text' placeholder='Enter your name' name='name' ></input>

            <input type='email' placeholder='Enter your email' name='email'></input>
            <button>Submit</button>
        </form>
   </>
  )
}

export default LoginForm;