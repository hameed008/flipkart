import React, { useState, useContext } from 'react'
import { Dialog } from '@mui/material'
import { authenticateSignup, authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
import { FiveK } from '@mui/icons-material'

const LoginImage = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"

const accountInitialValue = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'

  },
  signup: {
    view: 'signup',
    heading: 'Looks like youre new here!',
    subHeading: 'Sign up with your mobile number to get started'
  }
}

const signUpInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}

const loginInitialValues = {
  username: '',
  password: ''
}

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login)
  const [signup, setSignUp] = useState(signUpInitialValues)
  // console.log(signup)
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext)
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login)
    setError(false)
  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup)
  }

  const onInputChange = (e) => {
    // console.log(e)
    // console.log(e.target.value)
    setSignUp({ ...signup, [e.target.name]: e.target.value }) // here we use square brackets [] to write key of the object.
    // console.log(signup)
  }

  const signupUser = async () => {
    console.log('Called');
    let response = await authenticateSignup(signup); // since it is an asynchronous function so we have to either use .then() or async-await.
    console.log(response);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  }


  const onValueChange = (e) => {
    // console.log(e)
    // console.log(e.target.name)
    setLogin({ ...login, [e.target.name]: e.target.value })
    // console.log(login);
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    // console.log(response)
    if (response.status === 200) {
      handleClose()
      setAccount(response.data.data.firstname)
    } else {
      setError(true)
    }

  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
      <div className='grid grid-cols-[37%_63%] scroll-none '>

        <div className='bg-[#2874F0] text-white pt-10 px-8 relative'>
          <h1 className='text-3xl font-bold'>{account.heading}</h1>
          <p className='my-5 text-lg text-gray-200'>{account.subHeading}</p>
          <img src={LoginImage} alt="login image" className='absolute left-[50%] -translate-x-[50%] bottom-16 block mx-auto'
          />
        </div>
        {account.view === 'login' ?

          <div className='pt-10 pb-2 px-8'>
            <input type="text" placeholder='Enter username' onChange={(e) => { onValueChange(e) }} name="username" className='w-[100%] py-2 border-b border-gray-300 outline-none' />

            {error && <p className='text-red-500 text-[11px] font-bold mt-[10px]'>Please enter valid username or password</p>}

            <input type="text" placeholder='Enter Password' onChange={(e) => { onValueChange(e) }} name="password" className='w-[100%] py-2 mt-10 border-b border-gray-300 outline-none' />
            <p className='text-[12px] my-10'>By continuing, you agree to Flipkart's <span className='text-blue-500'><a href="#">Terms of Use</a></span> and <span className='text-blue-500'><a href="#">Privacy Policy</a></span>.</p>

            <button onClick={() => { loginUser() }} className='w-full bg-[#FB641B] py-3 rounded-sm border-none text-white text-xl'>Login</button>
            <p className='text-xl text-gray-500 text-center my-6'>OR</p>
            <button className='w-full bg-white py-3 rounded-sm border-none text-blue-500 text-xl shadow-md'>Request OTP</button>

            <a href="#" className='text-sm text-blue-500 text-center block mt-20 font-bold my-5' onClick={toggleSignup}>New to Flipkart? Create an account</a>
          </div>
          :
          <div className='pt-10 pb-2 px-8'>
            <input type="text" placeholder='Enter Firstname' onChange={(e) => { onInputChange(e) }} name="firstname" className='w-[100%] py-2 border-b border-gray-300 outline-none' />
            <input type="text" placeholder='Enter Lastname' onChange={(e) => { onInputChange(e) }} name="lastname" className='w-[100%] py-2 mt-10 border-b border-gray-300 outline-none' />
            <input type="text" placeholder='Enter Username' onChange={(e) => { onInputChange(e) }} name="username" className='w-[100%] py-2 mt-10 border-b border-gray-300 outline-none' />
            <input type="text" placeholder='Enter Email' onChange={(e) => { onInputChange(e) }} name="email" className='w-[100%] py-2 mt-10 border-b border-gray-300 outline-none' />
            <input type="text" placeholder='Enter Password' onChange={(e) => { onInputChange(e) }} name="password" className='w-[100%] py-2 mt-10 border-b border-gray-300 outline-none' />
            <input type="text" placeholder='Enter Phone' onChange={(e) => { onInputChange(e) }} name="phone" className='w-[100%] py-2 mt-10 border-b border-gray-300 outline-none' />
            <button className='w-full bg-[#FB641B] py-3 my-5 rounded-sm border-none text-white text-xl' onClick={() => { signupUser() }}>Continue</button>
          </div>
        }
      </div>
    </Dialog>
  )
}

export default LoginDialog
