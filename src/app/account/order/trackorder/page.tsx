
"use client"
import React, { useState } from 'react';
import { TextField, Button, Stepper, Step, StepLabel, Typography } from '@mui/material';

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Order Placement', date: '30 January, 2021, 8:37 AM' },
    { title: 'Processing', date: '30 January, 2021, 8:37 AM' },
    { title: 'Shipping', date: '30 January, 2021, 8:37 AM' },
    { title: 'Delivery', date: '30 January, 2021, 8:37 AM' }
  ];

  const trackOrder = () => {
    // Here you would typically make an API call to fetch the order status based on the orderId
    // For this example, let's assume the order status is retrieved from the backend
    // Replace this with your actual API call
    // Fake order status for demonstration
    const fakeOrderStatus = Math.random() < 0.5 ? 'Shipped' : 'Processing';
    setOrderStatus(fakeOrderStatus);
    // Move to the next step in the stepper
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" gutterBottom>
        Track Your Order
      </Typography>
      <div className="max-w-md mx-auto">
      <input
          type="text"
          className="w-full border rounded-md px-4 py-2 mb-4"
          placeholder="Enter your order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={trackOrder}
        >
          Track Order
        </button>
        {orderStatus && (
          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Order Status:
            </Typography>
            <Typography>{orderStatus}</Typography>
          </div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="h6" gutterBottom>
            Order Progress
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  <Typography variant="subtitle2">{step.title}</Typography>
                  <Typography variant="body2">{step.date}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>

      
    </div>
  );
};

export default OrderTrackingPage;
