import React, { useEffect } from "react";
import './App.css'

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate } from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import CreateProject from './Components/Admin/content/CreateProject'
import ListProjects from './Components/Admin/content/ListProjects'
import CreateSocialLink from './Components/Admin/socialLink/CreateSocialLink'
import ListSocailLink from './Components/Admin/socialLink/ListSocailLink'

// import { useSelector } from "react-redux";

function App() {
  // const { loginUser } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const isAuthenticate = localStorage.getItem('isAuthenticate');
  console.log(isAuthenticate);
  useEffect(() => {
    if (isAuthenticate) {

    } else {
      navigate('/')
    }

  }, []);
  return (


    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="project" element={<CreateProject />} />
          <Route path="project/list" element={<ListProjects />} />
          <Route path="socialLink" element={<CreateSocialLink />} />
          <Route path="socialLink/list" element={<ListSocailLink />} />
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
