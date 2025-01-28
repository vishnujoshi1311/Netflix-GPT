import React from 'react'

const Header = () => {
  return (
    <div className=' px-8 py-2 absolute w-screen bg-gradient-to-b from-black z-10 justify-between flex'>
     <img  className="w-60"  src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
     alt='logo' />
    
    <div className='flex'>
    <img className="w-20 h-20"  src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'  alt='user icon'/>
    <button>Sign Out</button>
    </div>

    </div>
    

  )
}

export default Header