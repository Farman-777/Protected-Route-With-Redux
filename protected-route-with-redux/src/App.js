import Login from "./Protected/Login";
import Profile from "./Protected/Profile";
import ProtectedUI from "./Protected/ProtectedUI";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./component/UserDashboard";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* <ProtectedUI /> */}
      <Routes>
        <Route path="/" element={<ProtectedUI />} />
        <Route path="/login" element={<Login />} />

        <Route path="/user" element={<PrivateRoute />} >
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<UserDashboard /> }></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
