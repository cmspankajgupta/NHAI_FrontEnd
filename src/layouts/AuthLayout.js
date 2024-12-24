import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';

const AuthLayout = ({ children }) => {
  return (
    <div className="public-layout">
    <div className="layout-content">
      <main className="main-content">
      <Header/>
        {children}
      </main>
    </div>
  </div>
  )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default AuthLayout;



