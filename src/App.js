import React, { useEffect } from "react";
import './App.css'

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate } from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// import CreateProject from './Components/Admin/content/CreateProject'
// import ListProjects from './Components/Admin/content/ListProjects'
// import CreateSocialLink from './Components/Admin/socialLink/CreateSocialLink'
// import ListSocailLink from './Components/Admin/socialLink/ListSocailLink'
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { GetUserByID } from "./reduxToolkit/publicUser/user/userApi";
import AdminDashboard from "./pages/AdminDashboard";
import Analytics from "./Components/AdminDashboard/components/Analytics";
import CreateProject from "./Components/AdminDashboard/components/projects/CreateProject";
import ListProjects from "./Components/AdminDashboard/components/projects/ListProjects";
import CreateSocialLink from "./Components/AdminDashboard/components/socialLink/CreateSocialLink";
import Profile from "./Components/AdminDashboard/components/Profile";
// import { useSelector } from "react-redux";

function App() {
  // const { loginUser } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const isAuthenticate = localStorage.getItem('isAuthenticate');

  const user = { publicUser: true, isUser: false, guest: false }

  // check the user is guest , publicUser and profileUrl

  // // `${user.isUser && '/:id'}`
  // // `${user.publicUser && '/:profileUrl'}`
  // const url = user.guest && '/' || user.publicUser && '/:profileUrl' || user.isUser && '/:authID'
  const { profileUrl } = useParams();
  console.log('ur >>>>>>>>>>>>>', profileUrl)
  useEffect(() => {
    if (isAuthenticate) {
      
    }
    else if (profileUrl) {
      navigate('/profileUrl')
    }
    // else {
    //   navigate('/')
    // }
  }, []);


  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:profileUrl" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="project" element={<CreateProject />} />
          <Route path="project/list" element={<ListProjects />} />
          <Route path="socialLink" element={<CreateSocialLink />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
