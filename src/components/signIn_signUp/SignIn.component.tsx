import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import { setUsername, setisLogIn } from "../../redux";

import "./signIn_signUp.scss";


export type State = {
  login: string;
  username: string;
  password: string;
};

const SignIn = () => {
  const state: any = useSelector<State>((state) => state.login);
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.username.length > 0 && password.length > 0) {
      if (state.username.length >= 4 && password.length >= 4) {
        dispatch(setisLogIn(!state.isLogin));
        alert(`Successfully LogedIn - ${state.username}`);
        navigate("/home");
      } else {
        alert("Input length more than 3 ");
      }
    } else {
      alert("Please Fill Credential");
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value: nextValue } = event.target;
    dispatch(setUsername(nextValue));
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setpassword(event.target.value);
  };
  return (
    <div className="input-list">
      <h2>sign in</h2>
      <form autoComplete="off">
        <div className="input-item">
          <label>USEREMAIL</label>
          <DebounceInput
            debounceTimeout={10000}
            type="text"
            value={state.username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-item">
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn">
          logIn
        </button>
        <NavLink to="/signup" className="btn">
          register
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
