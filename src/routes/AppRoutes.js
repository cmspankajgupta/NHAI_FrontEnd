import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SomeProtectedPage from '../pages/SomeProtectedPage/SomeProtectedPage';
import PublicLayout from '../layouts/PublicLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import ServicePage from '../pages/ServicePage/ServicePage';
import withErrorBoundary from '../hoc/withErrorBoundary';
import RoleDashboard from '../features/AccessForm/RoleDashboard';

const AppRoutes = () => {

  const ServicePageWithErrorBoundary = withErrorBoundary(ServicePage);
  return (
    <Routes>
      <Route path="/" element={<PublicRoute> <PublicLayout><HomePage /></PublicLayout></PublicRoute>} />
      <Route path="/service" element={<PublicRoute> <PublicLayout><ServicePageWithErrorBoundary /></PublicLayout></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><AuthLayout><LoginPage /></AuthLayout></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><AuthLayout><SignUpPage /></AuthLayout></PublicRoute>} />
      <Route path="/profile/:id" element={<PrivateRoute><PrivateLayout><ProfilePage /></PrivateLayout></PrivateRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><SomeProtectedPage /></ProtectedRoute>} />
      <Route path="/dashboard/role" element={<RoleDashboard/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
