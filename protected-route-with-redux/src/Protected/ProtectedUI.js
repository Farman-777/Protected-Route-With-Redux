// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { loggedin } from "./ProtectedReducer";

// const ProtectedUI = () => {
//    const Flag =  useSelector(state => state.ProtectedLoginSlice);
//    const dispatch = useDispatch()
//    const handleClick = () => {
//     dispatch(loggedin())
//    }
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item" onClick={handleClick}>
//           {
//           Flag ?
//           <Link to='/profile' className="nav-link" >
//                 Profile
//               </Link>
//               :
//               <Link to='/login' className="nav-link" >
//                 Login
//               </Link>
//               }
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default ProtectedUI;

// ProtectedUI.js
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";

// const ProtectedUI = () => {
//   const navigate = useNavigate();
//   const CurrentState = useSelector((state) => state.isLoggedIn);
//   const profileClick = () => {
//     if (CurrentState === true) {
//       navigate("/profile");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Navbar
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//             <button className="nav-link" onClick={profileClick}>
//                 Profile
//               </button>
//             </li>
            
//           </ul>
//         </div>
//         <Login />
//       </div>
//     </nav>
//   );
// };

// export default ProtectedUI;


import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
const ProtectedUI = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <button className="nav-link">
                Profile
              </button>
            </li>
            
          </ul>
        </div>
        <Login />
      </div>
    </nav>
  );
};

export default ProtectedUI;
