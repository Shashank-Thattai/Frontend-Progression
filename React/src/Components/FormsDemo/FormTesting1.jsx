import React, { useActionState, useRef } from 'react'
import { useFormState } from 'react-dom'

const FormTesting1 = () => {

    function handleForm(state,formData){
        var userData ={
            username:formData.get('username'),
            email:formData.get('email'),
            age:formData.get('age')
        }
        console.log(userData)
        if(userData.age <10)
        {
            return{ msg:'age is too young'}
        }

    }


    const[state,formAction] = useActionState(handleForm,{msg: 'Enter your details'})
  return (
    <>
    
    <form action={formAction}>

        <input type='text' placeholder='enter your username' name='username'></input>
        <br/>
        <input type='email'placeholder='enter your email' name='email'></input><br/>
        <input type='number' placeholder='enter your age' name='age'></input>
        <Submit/>
        <p>{state.msg}</p>
    </form>
    </>
  )
}

export default FormTesting1;

function Submit(){
    var {pending} = useFormState()

    return(
        <>
        <button type='submit'> {pending? 'submitting':'submit'}</button>
        
        </>
    )
}