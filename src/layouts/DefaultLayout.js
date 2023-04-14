import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collection from '../components/collection';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner />
      <Collection />
      {children}
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.any,
};

export default DefaultLayout;
