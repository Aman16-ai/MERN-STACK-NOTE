import React, { useState } from 'react'
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import { useEffect } from 'react';
export default function NavBar() {
    // const [authState,setAuthState] = useState(false)
    const history = useHistory();
    let location = useLocation();

    function handleLogout() {
        localStorage.removeItem("token")
        history.push("/login")
    }
    useEffect(() => {
        console.log(location.pathname)
        
    }, [])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                        <div className="btns">
                            {localStorage.getItem("token")?<button className='btn btn-danger' onClick={handleLogout}>Logout</button>: <div className="btns-child">
                                <Link className="btn btn-danger mx-3" to={"/login"}>Login</Link>
                                <Link className='btn btn-danger' to={"/createuser"}>Sign Up</Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
