import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import { setUsername } from "../../redux";
import "./signIn_signUp.scss";

//state type
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
    alert(`Successfully LogedIn - ${state.username}`);
    navigate("/");
    // if (state.username === "sonu@email.com" && state.password === "123") {
    //   alert(`Successfully LogedIn - ${state.username}`);
    //   navigate('/')
    // } else {
    //   alert("Your Credentials are not matched!");
    // }
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="input-item">
          <label>USEREMAIL</label>
          <DebounceInput
            debounceTimeout={10000}
            type="text"
            placeholder={state.username}
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
        <button type="submit" className="btn">
          signIn
        </button>
        <NavLink to="/signup" className="btn">
          SIGN UP
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
