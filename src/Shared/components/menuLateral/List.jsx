import { ListItemButton, ListItemIcon, ListItemText, Icon } from "@mui/material";
import React from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";


export const ListItemLink = ({to, icons, label, onClick}) => {

  const resolvePath = useResolvedPath(to)
  const match = useMatch({path: resolvePath.pathname, end: false})

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
    onClick?.()
  }
  
  return (   
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icons}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />                  
    </ListItemButton>         
  );
}