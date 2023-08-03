import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'
import toast, { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';


const Register = () => {
    const navigate = useNavigate();

    const { registerUser } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({ name: "", email: "", college: "", password: "", confirmpassword: "" })
    const inputEvent = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: [e.target.value] })
    }
    const register = async () => {
        if (userDetails.password[0] === userDetails.confirmpassword[0]) {
            let registerPromise = await registerUser(userDetails);
            if (registerPromise.success == true) {
                toast.success("Restration Successful !")
                setTimeout(() => { }, 3000)
                navigate("/login")
            }
            else toast.error(<b>Registration Failed !</b>)
        } else {
            toast.error(<b>Password Doesn't Match</b>)
        }
    }
    console.log(userDetails)

    return (
        <>
            {/* <Navbar /> */}

            <div className='main'>
                <h1>Sign up</h1>
                <Toaster />
                <form>
                    <div className='main-top'>
                        <div className="mb-3 google-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_46_36)">
                                    <path d="M23.9886 12.2247C23.9886 11.2414 23.9069 10.5239 23.7302 9.77979H12.2391V14.2178H18.9841C18.8482 15.3207 18.1138 16.9816 16.4819 18.0977L16.459 18.2463L20.0923 20.9965L20.344 21.021C22.6558 18.9349 23.9886 15.8654 23.9886 12.2247Z" fill="#4285F4" />
                                    <path d="M12.2391 23.9173C15.5436 23.9173 18.3177 22.8543 20.344 21.0206L16.4819 18.0973C15.4484 18.8016 14.0613 19.2932 12.2391 19.2932C9.00254 19.2932 6.25557 17.2071 5.27636 14.3237L5.13282 14.3356L1.35489 17.1925L1.30548 17.3267C3.31811 21.2332 7.4522 23.9173 12.2391 23.9173Z" fill="#34A853" />
                                    <path d="M5.27634 14.3238C5.01797 13.5797 4.86844 12.7824 4.86844 11.9586C4.86844 11.1347 5.01797 10.3375 5.26275 9.59342L5.25591 9.43494L1.43062 6.53223L1.30547 6.59039C0.475969 8.21149 0 10.0319 0 11.9586C0 13.8853 0.475969 15.7056 1.30547 17.3267L5.27634 14.3238Z" fill="#FBBC05" />
                                    <path d="M12.2391 4.62403C14.5373 4.62403 16.0875 5.59402 16.9715 6.40461L20.4256 3.10928C18.3042 1.1826 15.5436 0 12.2391 0C7.4522 0 3.31811 2.68406 1.30548 6.59056L5.26276 9.59359C6.25558 6.7102 9.00254 4.62403 12.2391 4.62403Z" fill="#EB4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_36">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <button>Google</button>
                        </div>
                        <p>or with</p>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter your username' className="form-control" name="name" value={userDetails.name} onChange={inputEvent} />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder='Enter your email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={userDetails.email} onChange={inputEvent} />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter your college name' className="form-control" name="college" value={userDetails.college} onChange={inputEvent} />
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder='Enter password' className="form-control" id="exampleInputPassword1" name="password" value={userDetails.password} onChange={inputEvent} />
                        </div>

                        <div className="mb-3">
                            <input type="password" placeholder='Confirm password' className="form-control" id="exampleInputPassword1" name="confirmpassword" value={userDetails.confirmpassword} onChange={inputEvent} />
                        </div>
                    </div>
                    <div className='main-bottom'>
                        <button type="button" className="btn btn-primary" onClick={register}>Sign up</button>
                        <NavLink to="/login" exact>Already have an account</NavLink>
                    </div>

                </form>
                {/* <Toaster /> */}

            </div>
        </>
    )
}

export default Register