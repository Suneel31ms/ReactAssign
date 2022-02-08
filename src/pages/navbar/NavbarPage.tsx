import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { State } from "../../components/signIn_signUp/SignIn.component";
import { setisLogIn } from "../../redux";
import "./navbar.scss";

const NavbarPage = () => {
  const state: any = useSelector<State>((state) => state.login);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(setisLogIn("false"));
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/home">
          {" "}
          <img src="https://previews.123rf.com/images/iul123rf/iul123rf1905/iul123rf190500122/123154028-sv-buchstaben-logo.jpg" alt="logo" />
        </Link>
        <div className="nav-item">
          <Link to="/home">Home</Link>
          {!state.isLogin && <Link to="/student">Students Data</Link>}

          {state.isLogin ? (
            <Link to="/">logIn</Link>
          ) : (
            <Link to="/" onClick={handleLogout}>
              logOut
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
