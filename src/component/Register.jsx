import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { regester } from '../services/auth/authSlice';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const Register = () => {
  const dispatch = useDispatch()

  const {isSuccess,isLoading,isError} = useSelector((state)=>state.auth)
  const navigate =  useNavigate()

  let schema = yup.object().shape({
    username: yup.string().required("Username is Required"),
    email: yup.string().email("Email should be valid").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });

const formik = useFormik({
    initialValues: {
      username:"",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(regester(values));
    },
  });


useEffect(()=>{
  if(isSuccess){
    toast.success("Register success")
    navigate("/login")
  }
  if(isError){
    toast.error("Somthing is wrong Pleas try letter")
  }
},[isSuccess,isError])

  return (
    <div className='md:w-[600px] w-full m-auto flex items-center justify-center mt-[140px]'>
        <div className='w-full'>
            <h1 className='text-[30px] font-bold text-center'>Register</h1>
            <form className='w-full flex flex-col' action='' onSubmit={formik.handleSubmit}>
                <div className='w-full'>
                    <input type="text" placeholder='Jone Deo' id='username' name='username' value={formik.values.name} onChange={formik.handleChange("username")}/>
                      <p className=' text-red-600'>{formik.touched.username && formik.errors.username}</p>
                </div>
                
                <div className='w-full'>
                    <input type="email" placeholder='Email' id='email' name='email' value={formik.values.name} onChange={formik.handleChange("email")}/>
                      <p className=' text-red-600'>{formik.touched.email && formik.errors.email}</p>
                </div>

                <div className='w-full'>
                    <input type="password" placeholder='Password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange("password")}/>
                      <p className='text-red-600'>{formik.touched.password && formik.errors.password}</p>
                </div>
                <button type='submit' className='primary flex items-center justify-center'>{isLoading ? ( 
                    <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="40"
                    visible={true}
                  />
                 ) : ("regester")}</button>
                  <div>
                      <p className=' text-center text-[18px]'>Already a mamber?<Link className=' font-bold' to={"/login"}>Login</Link> </p>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default Register



