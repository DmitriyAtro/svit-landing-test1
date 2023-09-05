import React, { useState } from "react";
import Logo from "../Img/Logo.svg";
import "./Header.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Products",
    },
    {
      text: "Software",
    },
    {
      text: "Gallery",
    },
    {
      text: "Contacts",
    },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Products</a>
        <a href="">Software</a>
        <a href="">Gallery</a>
        <a href="">Contacts</a>
      </div>
      <div className="buttons-container">
        <select className="lang-button">
          <option>En</option>
          <option>Ua</option>
        </select>
        <button className="primary-button">Contact us</button>
      </div>
    </nav>
  );
};

export default Header;
