import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarPage from "./pages/navbar/NavbarPage";
import SignIn from "./components/signIn_signUp/SignIn.component";
import SignUp from "./components/signIn_signUp/SignUp.Component";
import StudentPage from "./pages/studentdata/StudentPage";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
