"use client";
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';
import { useGetProductsQuery } from '../../store/api';

export default function AdminDashboard() {
  const { data: productsData, isLoading: productsLoading } = useGetProductsQuery({ limit: 1000 });
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    if (productsData?.items) {
      setStats(prev => ({
        ...prev,
        totalProducts: productsData.items.length,
      }));
    }
  }, [productsData]);

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: <InventoryIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      color: 'primary.main',
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      color: 'secondary.main',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      color: 'success.main',
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue}`,
      icon: <MoneyIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      color: 'warning.main',
    },
  ];

  if (productsLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
        📊 Admin Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {statCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                background: `linear-gradient(135deg, ${card.color}15 0%, ${card.color}05 100%)`,
                border: `1px solid ${card.color}20`,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 10px 25px ${card.color}30`,
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom sx={{ fontSize: '0.9rem' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: card.color }}>
                      {card.value}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    backgroundColor: `${card.color}20`, 
                    borderRadius: '50%', 
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {card.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity Section */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: 3,
            '&:hover': { boxShadow: 6, transition: 'all 0.3s ease' }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                🆕 Recent Products
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Latest products added to the store
              </Typography>
              {productsData?.items?.slice(0, 5).map((product) => (
                <Box key={product.id} sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  py: 1, 
                  borderBottom: '1px solid #eee' 
                }}>
                  <Typography variant="body2">{product.name}</Typography>
                  <Typography variant="body2" color="primary">${product.price}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: 3,
            '&:hover': { boxShadow: 6, transition: 'all 0.3s ease' }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                📦 Recent Orders
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Latest orders placed by customers
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                Order data will be displayed here once implemented
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}