# Jahezmart Admin Panel

## Overview
The Jahezmart Admin Panel provides comprehensive management tools for administrators to oversee products, users, orders, and system analytics.

## Features

### Dashboard
- Overview statistics (total products, users, orders, revenue)
- Recent activity monitoring
- Quick access to key management areas

### Products Management
- View all products in a comprehensive table
- Add new products with detailed information
- Edit existing product details
- Delete products (with confirmation)
- Monitor stock levels and product status

### Users Management
- View all registered users
- Manage user roles (promote/demote users to admin)
- Delete user accounts (with restrictions for admin accounts)
- Monitor user registration dates

### Orders Management
- View all customer orders
- Track order status (pending, completed, shipped, cancelled)
- View order details and customer information
- Monitor order totals and item counts

## Access Requirements

### Admin Authentication
- Only users with admin role can access the admin panel
- Admin credentials are stored in localStorage for session management
- Automatic redirect to login page for unauthorized access

### Login Process
1. Navigate to `/admin/login`
2. Enter admin credentials
3. Or use "Demo Login" for testing purposes
4. Upon successful login, redirected to admin dashboard

## Navigation

### Admin Layout
- Responsive sidebar navigation
- Mobile-friendly drawer menu
- Clean, professional interface using Material-UI

### Menu Items
- **Dashboard**: Main overview and statistics
- **Products**: Product management interface
- **Users**: User account management
- **Orders**: Order tracking and management
- **Logout**: Secure logout functionality

## Technical Implementation

### Components Used
- **Material-UI**: For consistent, professional UI components
- **React**: Frontend framework
- **Next.js**: React framework with App Router
- **Redux**: State management for cart and authentication

### Key Components
- `AdminLayout`: Main layout wrapper with navigation
- `AdminGuard`: Authentication protection for admin routes
- `AdminDashboard`: Statistics and overview page
- `AdminProducts`: Product CRUD operations
- `AdminUsers`: User management interface
- `AdminOrders`: Order tracking interface

### API Integration
- Products data fetched via RTK Query
- User and order data simulated (ready for backend integration)
- Authentication handled via localStorage (can be extended to API calls)

## Usage Instructions

### Accessing Admin Panel
1. Login as an admin user or use demo login
2. Click the admin panel icon in the navigation bar (shield icon)
3. Navigate through different sections using the sidebar

### Managing Products
1. Go to Products section
2. Use "Add Product" button to create new products
3. Click edit icon to modify existing products
4. Click delete icon to remove products (with confirmation)

### Managing Users
1. Go to Users section
2. View user details in the table
3. Click admin icon to toggle user roles
4. Click delete icon to remove users (admins cannot delete other admins)

### Managing Orders
1. Go to Orders section
2. View order details and status
3. Click view icon to see detailed order information
4. Monitor order status chips for quick status identification

## Security Features

### Route Protection
- Admin routes protected by `AdminGuard` component
- Automatic redirect for unauthorized access
- Session-based authentication

### Role-Based Access
- Admin role required for panel access
- Restricted actions based on user permissions
- Secure logout functionality

## Future Enhancements

### Planned Features
- Real-time notifications for new orders
- Advanced analytics and reporting
- Bulk operations for products/users
- Order fulfillment workflow
- Inventory management system
- Customer communication tools

### API Integration
- Full backend API integration for CRUD operations
- Real-time data synchronization
- Advanced filtering and search capabilities
- Export functionality for reports

## Development Notes

### File Structure
```
src/
├── app/
│   └── admin/
│       ├── layout.jsx          # Admin layout with navigation
│       ├── page.jsx            # Dashboard page
│       ├── products/
│       │   └── page.jsx        # Products management
│       ├── users/
│       │   └── page.jsx        # Users management
│       ├── orders/
│       │   └── page.jsx        # Orders management
│       └── login/
│           └── page.jsx        # Admin login page
└── components/
    └── admin/
        ├── AdminLayout.jsx     # Main admin layout component
        └── AdminGuard.jsx      # Authentication guard
```

### Styling
- Material-UI theme integration
- Responsive design for mobile and desktop
- Consistent color scheme and typography
- Professional admin interface design

This admin panel provides a solid foundation for managing the Jahezmart e-commerce platform with room for future enhancements and full backend integration.