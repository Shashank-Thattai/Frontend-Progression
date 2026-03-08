import React, { useActionState } from 'react'
import './FormDemo.css'
import { useFormStatus } from 'react-dom'



async function handleFormSubmit(prevState,formData){
    console.log(prevState)
    var userData ={
        userName: formData.get('username'),
        password: formData.get('password'),
        age: formData.get('age'),
        email: formData.get('email'),

    }
    /*console.log(formData.get('username'))
    console.log(formData.get('password'))
    console.log(formData.get('age'))
    console.log(formData.get('email'))*/

    console.log(userData)



    await new Promise((r)=>setTimeout(r,2000));

    if(userData.userName === '' || userData.password ==='' || userData.age<=0 || userData.email === '')
    {
    return {
        msg:'Missing fields'
    }}else{
        return {
            msg:'Details been validated'
        }
    }
}

const FormDemo = () => {

    const[state,formAction] = useActionState(handleFormSubmit,{msg:''})

  return (
    <>
    <form action ={formAction}>
        {JSON.stringify(state)}
    <ul>
        <li className='title'>User Regestritation page</li>
        <li>
            <input type='text' placeholder='Enter Username' name='username' required></input>
        </li>
        <li>
            <input type='password' placeholder='Enter Password' name='password'></input>
        </li>
        <li>
            <input type='number' placeholder='Enter Age' name='age'></input>
        </li>
        <li>
            <input type='email' placeholder='Enter Email' name='email'></input>
        </li>
        <li>
            <SubmitButton/>
        </li>
        <li>
            Form Statis is - {state.msg}
        </li>
        
        
    </ul>
    </form>
    
    </>
  )
}

function SubmitButton(){
    const{pending}=useFormStatus();
    return(
        <> 
        {pending}
        
               <button type='submit' className='btn-submit'>{pending ? 'submitting...': 'submit'}</button>
        </>
    )
}

export default FormDemo;