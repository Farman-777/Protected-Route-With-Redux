import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedin } from "./ProtectedReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.isLoggedIn);
  const handleClick = () => {
    dispatch(loggedin());
    navigate("/user");
    alert(loggedIn);
  };
  return (
    <div>
      Welcome To Login Page
      <button onClick={handleClick}>login</button>
    </div>
  );
};

export default Login;
