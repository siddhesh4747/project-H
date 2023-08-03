import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from './Navbar';

axios.defaults.baseURL = 'http://localhost:8000';

const Profile = () => {
    const navigate = useNavigate();
    const { updateUser } = useContext(UserContext);
    const username = localStorage.getItem("username")
    const [ApiData, setApiData] = useState([]);
    const fetchData = async () => {
        const response = await axios.get(`/api/user/${username}`, {
            headers: {
                Accept: '*/*',
                'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
            },
        });
        console.log(response.data);
        setApiData(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        address: '',
    });

    useEffect(() => {
        setUserDetails({
            firstname: ApiData.firstName,
            lastname: ApiData.lastName,
            email: ApiData.email,
            mobile: ApiData.mobile,
            address: ApiData.address,
        });
    }, [ApiData]);

    const inputEvent = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const update = async () => {
        const response = await updateUser(userDetails);
        if (response.success == true) {
            toast.success("Updated Successful !")
        }
        else {
            toast.error(<b>Couldn't Update!</b>)
            console.log(response)
        }

    }

    return (
        <>
            <div>
                Home
            </div>
        </>

    )
}

export default Profile