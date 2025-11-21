"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Alert } from '@mui/material';

export default function AdminGuard({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdminAccess = () => {
      // Check if user is logged in as admin
      const adminToken = localStorage.getItem('adminToken');
      const userRole = localStorage.getItem('userRole');
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem('user');
      let user = null;
      if (userStr) {
        try {
          user = JSON.parse(userStr);
        } catch (e) {
          // ignore
        }
      }

      if ((adminToken && userRole === 'admin') || (token && user?.role === 'admin')) {
        setIsAuthorized(true);
      } else {
        // Redirect to admin login page
        router.push('/admin/login');
      }

      setIsLoading(false);
    };

    checkAdminAccess();
  }, [router]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthorized) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        p={3}
      >
        <Alert severity="error" sx={{ maxWidth: 400 }}>
          You don't have permission to access the admin panel.
          Please login as an administrator.
        </Alert>
      </Box>
    );
  }

  return children;
}