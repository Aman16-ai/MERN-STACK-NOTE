import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function CreateUser() {
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [Name,setName] = useState("")
    const history = useHistory()
    async function createUserWithEmailAndPassword(credentials) {
        let url = 'http://localhost:5000/api/auth/createuser'
        const response = await fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(credentials)
        })

        const data = await response.json()
        console.log(data)
        if(data.success) {
            localStorage.setItem("token",data.authtoken)
            history.push("/")
        }
        else {
            alert("Something went wrong")
        }
    }
    function submit() {
        const credentials = {
            'name' : Name,
            'email' : Email,
            'password' : Password
        }
        console.log(credentials)
        createUserWithEmailAndPassword(credentials)
    }
    return (
        <div className="container">
            <h1>Register here</h1>
        <div className='mb-3 my-3'>
        <label for="userName" className='form-label'>Username</label>
            <input type="text" value={Name} className='form-control' name="userName" placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3 my-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Example password</label>
            <input className='form-control' name='password' type="password" onChange={(e)=> {
                setPassword(e.target.value)
            }}/>
        </div>
        <button onClick={submit} className='btn btn-primary'>Login</button>
        </div>
    )
}
