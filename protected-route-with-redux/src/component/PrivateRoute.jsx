// import React from 'react'
// import { Outlet,useNavigate } from 'react-router-dom'

// const PrivateRoute = () => {
//   const navigate = useNavigate()
// let LoggedIn = false;

// if(LoggedIn) {
//   return <Outlet />
// }
// else{
//   return navigate("/login")
// }
// }

// export default PrivateRoute

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const loggedIn =   useSelector(state => state.isLoggedIn)
  

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  if (loggedIn) {
    return <>
    <Outlet />
    <h1>Hello user</h1>
    </>
  }

  // Optional: You can render a loading state or a message here while the redirect happens
  return null;
};

export default PrivateRoute;
