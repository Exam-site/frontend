import "./App.css";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>hIII</div>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </>
  );
}

export default App;
