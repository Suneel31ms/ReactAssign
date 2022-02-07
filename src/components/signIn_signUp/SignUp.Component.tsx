import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

//state type

type State = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState: State = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setemail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setconfirmPassword"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setemail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setconfirmPassword":
      return {
        ...state,
        confirmPassword: action.payload,
      };
  }
};

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (state.password === state.confirmPassword) {
      alert(`Successfully Registered - ${state.username}`);
      navigate("/");
    } else {
      alert("Your Credentials are not matched!");
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };
  const handleUserEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setemail",
      payload: event.target.value,
    });
  };
  const handleUserPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };
  const handleUserConfirmPasswordChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    dispatch({
      type: "setconfirmPassword",
      payload: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="input-list">
          <div className="input-item">
            <label>USERNAME</label>
            <input
              type="text"
              value={state.username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-item">
            <label>EMAILID</label>
            <input
              type="email"
              value={state.email}
              onChange={handleUserEmailChange}
              required
            />
          </div>
          <div className="input-item">
            {" "}
            <label>PASSWORD</label>
            <input
              type="password"
              value={state.password}
              onChange={handleUserPasswordChange}
              required
            />
          </div>
          <div className="input-item">
            <label>CONFIRM PASSWORD</label>
            <input
              type="password"
              value={state.confirmPassword}
              onChange={handleUserConfirmPasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn">
            sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
