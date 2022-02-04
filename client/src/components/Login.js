import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
export const Login = (props) => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const history = useHistory()
    let host = "http://localhost:5000/";
    async function loginUser(credentials) {
        let url = `${host}api/auth/login`;
        const response = await fetch(url,{
            method : "POST",
            headers:{
                'Content-Type' : 'application/json'
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
            alert("Invalid credentials")
        }
    }

    function handleLogin() {
       
        const credentials = {
            'email':email,
            'password':password
        }
        console.log("handling loging",credentials)
        loginUser(credentials) 
    }

    return <div className='container'>
        <h1>Login with your email and password</h1>
        <div class="mb-3 my-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div class="mb-3">
            <label htmlFor="password" class="form-label">Example password</label>
            <input className='form-control' name='password' type="password" onChange={(e)=> {
                setPassword(e.target.value)
            }}/>
        </div>
        <button onClick={handleLogin} className='btn btn-primary'>Login</button>
    </div>;
};
