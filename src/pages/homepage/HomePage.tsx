import React from "react";
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../redux";

import "./homepage.scss";

type PropsType = {
  user: string;
  login: string;
};

function HomePage({ fetchUsers }: any) {
  const userData: any = useSelector<PropsType>((state) => state.user);
  const state: any = useSelector<PropsType>((state) => state.login);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h2 style={{ padding: "1rem", color: "#077e60" }}>
        Welcome{" "}
        {state.username && !state.isLogin
          ? state.username
          : "user Please Login"}
      </h2>
      <div className="home-items">
        {userData.loading ? (
          <h2>
            <img src="load.gif" alt="loading" />
          </h2>
        ) : (
          userData.user
            .filter((item: any, index: any) => index < 40)
            .map((item: any) => (
              <div className="home-title" key={item.id}>
                <img src={`${item.url}`} alt="pict" width="120px" />
                <div key={item.id}>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

const mapDispatchfromProps = (dispatch: any) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(null, mapDispatchfromProps)(HomePage);
