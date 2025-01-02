import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [issignInForm , SetIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetIsSignInForm(!issignInForm);
  };


  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg'
    alt='logo'/>
    </div>

    <form className='absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white opacity-80 rounded-lg'>

      <h1 className='font-bold text-3xl py-4'>{issignInForm? "Sign In" : "Sign Up"}    
      </h1>

      {!issignInForm && <input type='text' placeholder='Full Name' className='p-2 my-3 w-full bg-gray-800'/>}

      <input type='text' placeholder='phone or Email address' className='p-2 my-4 w-full bg-gray-800'/>

      <input type='password' placeholder='Password' className='p-2 my-3 w-full bg-gray-800'/>

      <button className='p-4  my-5 w-full bg-red-700 rounded-lg'>{issignInForm? "Sign In" : "Sign Up"}        
      </button>

      <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{issignInForm? "New to Netflix? sign up now" : "Already a user? Sign In now"}  
      </p>

    </form>

    </div>
  )
}

export default Login