import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import Routes from "../Routes";
import "./Layout.css";
import Topnav from "../topnav/TopNav";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../redux/actions/ThemeAction";
const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  console.log(themeReducer.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode");
    console.log(themeClass);
    const colorClass = localStorage.getItem("colorMode");

    dispatch(ThemeAction.setMode(themeClass));
    console.log(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <Topnav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
