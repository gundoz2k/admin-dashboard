import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.png";

import sidebar_items from "../../assests/JsonData/sidebar_routes.json";
console.log(sidebar_items);

const SidebarItem = (props) => {
  console.log(props.active);
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const SideBar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            icon={item.icon}
            title={item.display_name}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
