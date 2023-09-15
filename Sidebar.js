import React, { useState } from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
  Brightness4, // Dark mode icon
  Brightness7, // Light mode icon
} from '@mui/icons-material';
import { Button, IconButton, Avatar, Typography } from '@mui/material';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Apply or remove dark mode styles here
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const user = {
    username: 'Harsh8340',
    displayName: 'Harsh',
    avatarUrl: 'URL_TO_YOUR_AVATAR_IMAGE',
  };

  const sidebarOptions = [
    { Icon: Home, text: 'Home' },
    { Icon: Search, text: 'Search' },
    { Icon: NotificationsNone, text: 'Notifications' },
    { Icon: MailOutline, text: 'Messages' },
    { Icon: BookmarkBorder, text: 'Bookmarks' },
    { Icon: ListAlt, text: 'Lists' },
    { Icon: PermIdentity, text: 'Profile' },
    { Icon: MoreHoriz, text: 'More' },
  ];

  return (
    <div className={`sidebar ${darkMode ? 'sidebar--dark' : ''}`}>
      <Twitter className="sidebar__twitter-icon" />
      <IconButton
        className="sidebar__dark-mode-toggle"
        onClick={handleDarkModeToggle}
        color="inherit"
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Avatar
        src={user.avatarUrl}
        alt={user.username}
        className="sidebar__avatar"
      />
      <Typography variant="h6" className="sidebar__user">
        {user.displayName}
      </Typography>
      <Typography variant="subtitle2" className="sidebar__username">
        @{user.username}
      </Typography>

      <div className="sidebar__options">
        {sidebarOptions.map((option, index) => (
          <SidebarOption
            key={index}
            Icon={option.Icon}
            text={option.text}
          />
        ))}
      </div>

      <Button className="sidebar__tweet-btn" variant="outlined" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
