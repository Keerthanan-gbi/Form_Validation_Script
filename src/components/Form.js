import React from 'react'
import { useForm } from 'react-hook-form';
export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
  return (
    <section>
        <div className="register">
                <h1><b>Dynamic Form</b></h1>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <label>Enter your Username</label><br/>
                    <input type="text" {...register("username", { required : true, maxLength: 10 })} placeholder='your Username' /><br/>
                    <h3>{errors.username?.type === "required" && "Please Fill the Column"}<br/>
                    {errors.username?.type === "maxLength" && "Invalid Usernme"}</h3><br/>
                <label>Enter your email</label><br/>
                    <input type="text" {...register("email", { required : true, maxLength: 10 })} placeholder='Your Email' /><br/>
                    <h3>{errors.email?.type === "required" && "Please fill your Email"}<br/>
                    {errors.email?.type === "maxLength" && "Please Fill the Column"}</h3><br/>
                <label>Enter your password</label><br/>
                    <input type="text" {...register("mobile", { required : true, minLength: 4 })} placeholder='your Password' /><br/>
                   <h3>{errors.mobile?.type === "minLength" && "Password is Weak"}<br/>
                    {errors.mobile?.type === "required" && "Please Fill the Password"}<br/></h3>
                    <button className='btn'>Sign In</button>
                </form>
            </div>
    </section>
  )
}
