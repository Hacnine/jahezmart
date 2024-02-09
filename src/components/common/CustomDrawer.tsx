"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'right';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <div>
      <div>
      <Button onClick={toggleDrawer}>Open Drawer</Button>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer}
      >
        <div>
          {/* Content of the drawer goes here */}
          <h2>Drawer Content2</h2>
          <p>This is the content of the drawer.</p>
        </div>
      </Drawer>
    </div>
    </div>
  );
}