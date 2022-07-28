import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/AdminDashboard/components/Sidebar";
import Dashboard from "../Components/AdminDashboard/components/Dashboard";
import './admin.css';

export default function AdminDashboard() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: black;
`;
