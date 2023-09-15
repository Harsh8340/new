import React from 'react'
import "./SidebarOption.css";

const SidebarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebar-option ${active ? "sidebar-option__active" : ""}`}>
      <Icon className="sidebar-option__icon" />
      <h2 className='sidebar-option__label'>{text}</h2>
    </div>
  ); 
};

export default SidebarOption;
