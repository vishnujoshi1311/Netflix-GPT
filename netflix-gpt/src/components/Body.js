import { React, useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/firebase'
import { adduser, removeuser } from '../Utils/UserSlice'

const Body = () => {
  
  
  const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },

    {
      path:"/Browse",
      element:<Browse/>,
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayname} = user;
        dispatch(adduser({uid:uid, email:email, displayname:displayname}));
      
      } else {
         dispatch(removeuser());
      }
    });
  // eslint-disable-next-line
  }, []);

 return (
    <div><RouterProvider router={appRouter}/></div>
  )
}

export default Body