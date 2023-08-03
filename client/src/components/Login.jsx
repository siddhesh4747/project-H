import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'
import toast, { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';


const Login = () => {
    const navigate = useNavigate();

    const { verifyPassword, setUsername } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({ name: "", password: "", email: "" })
    const inputEvent = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: [e.target.value] })
    }
    const login = async () => {
        if (userDetails.email === "") {
            let loginPromise = await verifyPassword(userDetails.name, userDetails.password);
            if (loginPromise.success == true) {
                toast.success("Login Successful !")
                const token = loginPromise.data.token;
                localStorage.setItem('token', token)
                localStorage.setItem('username', userDetails.name)
                setTimeout(() => {
                    navigate("/profile");
                }, 3000)

            }
            else toast.error(<b>Login Failed !</b>)
        } else if (userDetails.name === "") {
            let loginPromise = await verifyPassword(userDetails.email, userDetails.password);
            if (loginPromise.success == true) {
                toast.success("Login Successful !")
                const token = loginPromise.data.token;
                localStorage.setItem('token', token)
                localStorage.setItem('username', userDetails.name)
                setTimeout(() => {
                    navigate("/profile");
                }, 3000)

            }
            else toast.error(<b>Login Failed !</b>)
        }

    }
    console.log(userDetails)
    return (
        <>
            <Toaster />

            <div className='main'>
                <h1>Sign in</h1>
                <form>
                    <div className="main-top">
                        <div className="mb-3">
                            <input type="text" placeholder='Enter your username' className="form-control" name="name" value={userDetails.name} onChange={inputEvent} />
                        </div>
                        <p>or</p>
                        <div className="mb-3">
                            <input type="email" placeholder='Enter your email' className="form-control" name="email" value={userDetails.email} onChange={inputEvent} />
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder='Your password' className="form-control" id="exampleInputPassword1" name="password" value={userDetails.password} onChange={inputEvent} />
                        </div>
                    </div>
                    <div className="main-bottom">
                        <button type="button" className="btn btn-primary" onClick={login}>Sign in</button>
                        <NavLink to="/recovery">Forgot Password?</NavLink>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Login