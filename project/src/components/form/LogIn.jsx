import React, {useState} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'

const SignIn = () => {
  const[formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    // e.preventdefault();

    // axios.get("http://localhost:5500/getUser", formData)
    // .then((response)=>{
    //     setMessage(response.data.message);
    // })
    // .catch((error) => {
    //     alert(error)
    // })
    console.log("Submitted Successfully");
    
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='grid place-items-center h-[100vh]'>
      {message && 
      <h1 className='text-pink-500'>{message}</h1>}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-16 w-[40%] shadow-xl'>
        <h1 className='text-4xl font-bold'>Sign In</h1>

        <input onChange={handleChange} type="email" name="email" placeholder='Enter email' className='p-2 px-4 w-full border-b-2 border-black' value={formData.email} required />

        <input onChange={handleChange} type="password" name="password" placeholder='Enter password' className='p-2 px-4 w-full border-b-2 border-black' value={formData.password} required />

        <button type="submit" className='p-2 px-4 bg-blue-500 rounded-md'>Submit</button>
        <Link className='p-2 px-4 bg-green-500 rounded-md text-center' to = '/Register'>
        <button className=''>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn