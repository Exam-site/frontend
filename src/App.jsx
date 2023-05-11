import "./App.css";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignInadmin" element={<SignIn isadminlogin/>} />
        <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </>
  );
}

export default App;
