import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

export default function Navbar() {
  const navigate = useNavigate();

  const {isAuthenticated, logout} = useAuth();
  
  async function handleLogout() {
    const result = await logout();
    if (result.success) {
        navigate('/');
    } else {
      console.error(result.message);
    }
}

  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="flex items-center">
          <img src="/logo-no-background.png" alt="Logo" className="h-10 mr-3" />
          <p className="text-white font-bold text-lg">Employee Management System</p>
        </div>

        {isAuthenticated && (
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-white">Employees</a>
            <a href="#" className="text-gray-300 hover:text-white">Reports</a>
            <a href="#" className="text-gray-300 hover:text-white">Settings</a>
          </div>
        )}

        {isAuthenticated && (
          <>
            <img src="user-avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
            <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
          </>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
