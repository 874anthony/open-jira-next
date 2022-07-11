import { useContext } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import { UIContext } from '../../context/ui';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItemButton sx={{ padding: '10px' }} key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                <ListItemText>{text}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                <ListItemText>{text}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
