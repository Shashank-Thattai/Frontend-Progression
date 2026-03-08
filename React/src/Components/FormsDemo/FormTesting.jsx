import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom';

const FormTesting = () => {

    async function handleSubmit(prevstate,formData)
    {
        var userData ={
        username:formData.get('username'),
        email:formData.get('email'),
        password:formData.get('password'),
        age:Number(formData.get('age'))
        }
        if(userData.age<10)
        {
            return {
                msg: 'too young'
            }
        }
        
        await new Promise((r)=>setTimeout(r,2000));// force waiting for 2 seconds
        
        console.log(userData)
        return [userData]
        
    }

    const[state,action] = useActionState(handleSubmit,{msg:''})
  return (
    <>
    {JSON.stringify(state)}
    <form action={action}>
        <input type='text' placeholder='Enter your name' name='username'></input>
        <input type='email' placeholder='Enter your email' name='email'></input>
        <input type='number' placeholder='Enter your age' name='age'></input>
        <input type='password' placeholder='Enter your password' name='password'></input>
        <p>{state.msg}</p>
        <Submit/>
    </form>
    
    
    </>
  )
}
function Submit(){
    var {pending} = useFormStatus()
    return(
        <>
        {pending.toString()}
        <button type='submit' className='btn-submit'>{pending ? 'submitting...': 'submit'}</button>
        </>
    )
}

export default FormTesting;