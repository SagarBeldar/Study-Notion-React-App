import { React, useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();

    const [formData, setFormdata] = useState({
        email: "  ", password: " "
    })

    const [showPassword, setShowpassword] = useState(false)

    function changeHandler(event) {
        setFormdata((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        // event.preventDafault();
        setIsLoggedIn(true)
        console.log(formData)
        toast.success("Logged in")
        navigate("/dashboard")
    }



    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-y-5 mt-3'>
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                    <sup className="text-pink-200">*</sup>
                </p>
                <input required
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Emial Id' 
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 "/>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password
                <sup className="text-pink-200">*</sup>
                 </p>
                <input required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password' 
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 "/>


                <span  className="absolute right-3 top-[38px] cursor-pointer "
                onClick={() => setShowpassword((prev) => !prev)}>
                    {showPassword ?  (<AiFillEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiFillEye fontSize={24} fill="#AFB2BF"/>) }
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900 w-full">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm