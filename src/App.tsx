import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavbarPage from "./pages/navbar/NavbarPage";
import SignIn from "./components/signIn_signUp/SignIn.component";
import SignUp from "./components/signIn_signUp/SignUp.Component";
import StudentPage from "./pages/studentdata/StudentPage";
import HomePage from "./pages/homepage/HomePage";
import NoMatch from "./pages/Notmatch/NoMatch";

function App() {
  return (
    <div className="App">
     <HashRouter>
      <NavbarPage />
     <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="* " element={<NoMatch />} />
      </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
