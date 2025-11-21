"use client";

import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

// Initialize state from localStorage if available
const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      return {
        token: token || null,
        user: user ? JSON.parse(user) : null,
      };
    } catch (error) {
      return { token: null, user: null };
    }
  }
  return { token: null, user: null };
};

const initialState = loadFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload || {};
      state.token = token || null;
      state.user = user || null;
      
      // Persist to localStorage
      if (typeof window !== "undefined") {
        if (token) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
        
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          localStorage.removeItem("user");
        }
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      
      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        
        // Persist to localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("user", JSON.stringify(payload.user));
        }
      })
      .addMatcher(api.endpoints.register.matchFulfilled, (state, { payload }) => {
        if (payload.token) {
          state.token = payload.token;
          state.user = payload.user;
          
          // Persist to localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("token", payload.token);
            localStorage.setItem("user", JSON.stringify(payload.user));
          }
        }
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
