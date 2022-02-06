import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { State } from "../../components/signIn_signUp/SignIn.component";
import { setUsername } from "../../redux";
import "./navbar.scss";

const NavbarPage = () => {
  const state: any = useSelector<State>((state) => state.login);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(setUsername(""));
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          {" "}
          <img src="s_logo.png" alt="logo" />
        </Link>
        <div className="nav-item">
          <Link to="/">Home</Link>
          <Link to="/student">Students Data</Link>
          {!state.username ? (
            <Link to="/signin">sign In</Link>
          ) : (
            <Link to="/" onClick={handleLogout}>
              SignOut
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
