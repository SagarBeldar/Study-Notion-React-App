import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'

import {toast} from "react-hot-toast"
const Navbar = (props) => {

    let isLoggedIn=props.isLoggedIn;
    let setisLoggedIn=props.setisLoggedIn;  

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4">
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy' ></img>
        </Link>

        <nav className='flex'>
            <ul className="flex gap-x-6 text-richblack-25">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex items-center gap-x-4 text-richblack-100">
            { !isLoggedIn &&
                <Link to="/login">
                    <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                        Login
                    </button>
                </Link>
            }
            {
                !isLoggedIn&&
                <Link to="/signup">
                    <button  className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                    onClick={()=>{
                        setisLoggedIn(false);
                        // toast.success("Login");
                    }}>
                        SignUp
                    </button>
                </Link>
            }
            { isLoggedIn&&
                <Link to="/">
                    <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                    onClick={()=>{
                        setisLoggedIn(false);
                        toast.success("Logout");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            {   isLoggedIn&&
                <Link to="/dashboard">
                    <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar