import React, { useState } from 'react'

const login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log("Email is",email ,"and password is", password)
        handleLogin(email,password)

        setEmail('')
        setPassword('')
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-1 border-emerald-600 rounded-xl p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className=' border-2 border-emerald-600 py-3 px-5 rounded-full text-white outline-none text-xl' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                
                required className=' border-2 border-emerald-600 py-3 px-5 mt-3 rounded-full text-white outline-none text-xl' type="password" placeholder='Enter password'/>
                <button className='bg-emerald-600 mt-5 py-3 px-5 rounded-full text-white outline-none text-xl'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default login
