"use client";
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ProductsIcon,
  People as UsersIcon,
  ExitToApp as LogoutIcon,
  Inventory as InventoryIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Products', icon: <ProductsIcon />, path: '/admin/products' },
    { text: 'Users', icon: <UsersIcon />, path: '/admin/users' },
    { text: 'Orders', icon: <InventoryIcon />, path: '/admin/orders' },
  ];

  const handleMenuClick = (path) => {
    router.push(path);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    // Clear admin token and redirect to home
    localStorage.removeItem('adminToken');
    router.push('/');
  };

  const drawer = (
    <Box sx={{ 
      height: '100%', 
      background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      width: sidebarCollapsed ? collapsedDrawerWidth : drawerWidth,
      transition: 'width 0.3s ease'
    }}>
      <Toolbar sx={{ backgroundColor: 'rgba(255,255,255,0.1)', minHeight: '64px !important' }}>
        {!sidebarCollapsed && (
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            🛍️ Jahezmart Admin
          </Typography>
        )}
        <IconButton 
          onClick={handleSidebarToggle} 
          sx={{ 
            color: 'white', 
            ml: sidebarCollapsed ? 0 : 'auto',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
          }}
        >
          <ChevronLeftIcon sx={{ 
            transform: sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }} />
        </IconButton>
      </Toolbar>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
      <List sx={{ pt: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleMenuClick(item.path)}
              sx={{
                mx: 1,
                borderRadius: 2,
                justifyContent: sidebarCollapsed ? 'center' : 'initial',
                px: sidebarCollapsed ? 1 : 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: sidebarCollapsed ? 'auto' : 56 }}>
                {item.icon}
              </ListItemIcon>
              {!sidebarCollapsed && (
                <ListItemText primary={item.text} sx={{ '& .MuiTypography-root': { fontWeight: 500 } }} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mt: 'auto' }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton 
            onClick={handleLogout}
            sx={{
              mx: 1,
              borderRadius: 2,
              justifyContent: sidebarCollapsed ? 'center' : 'initial',
              px: sidebarCollapsed ? 1 : 2,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'translateX(5px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: sidebarCollapsed ? 'auto' : 56 }}>
              <LogoutIcon />
            </ListItemIcon>
            {!sidebarCollapsed && (
              <ListItemText primary="Logout" sx={{ '& .MuiTypography-root': { fontWeight: 500 } }} />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${sidebarCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
          ml: { sm: `${sidebarCollapsed ? collapsedDrawerWidth : drawerWidth}px` },
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'width 0.3s ease, margin-left 0.3s ease'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            Dashboard Overview
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: sidebarCollapsed ? collapsedDrawerWidth : drawerWidth }, flexShrink: { sm: 0 }, transition: 'width 0.3s ease' }}
        aria-label="admin navigation"
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: sidebarCollapsed ? collapsedDrawerWidth : drawerWidth,
              transition: 'width 0.3s ease'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
          mt: '64px', // AppBar height
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          transition: 'width 0.3s ease'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}