import React from 'react';
import PropTypes from 'prop-types'; 
import Navbar from '../components/Navbar/Navbar'; 
import Footer from '../components/Footer/Footer'; 


const PublicLayout = ({ children }) => {
  return (
    <div className="public-layout">
      <Navbar /> 
      <div className="layout-content">
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer  />
    </div>
  );
};


PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
