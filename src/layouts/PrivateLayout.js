import React from 'react';
import PropTypes from 'prop-types'; 
import Navbar from '../components/Navbar/Navbar'; 
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const PrivateLayout = ({ children }) => {
  return (
    <div className="private-layout">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          {children} 
        </main>
      </div>
      <Footer />
    </div>
  );
};


PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default PrivateLayout;
