import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Banner from '../components/Banner';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Banner />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.any,
};

export default DefaultLayout;
