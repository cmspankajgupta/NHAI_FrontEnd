import { useState, useEffect } from 'react';

// A custom hook to manage authentication status
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there's a token in localStorage or sessionStorage
    const token = localStorage.getItem('token'); // Or use sessionStorage.getItem('token')

    if (token) {
      // If a token exists, consider the user as authenticated
      setIsAuthenticated(true);
    } else {
      // If no token, consider the user not authenticated
      setIsAuthenticated(false);
    }
  }, []);

  // You can also provide a function to log the user out
  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from storage
    setIsAuthenticated(false); // Update the auth state
    window.location.href = '/login'; // Redirect to login page
  };

  // Returning isAuthenticated status and the logout function
  return { isAuthenticated, logout };
};

export default useAuth;
