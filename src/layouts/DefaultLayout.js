import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Search from '../components/Search';
import Sale from '../components/Sale';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Sale />
      {children}
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.any,
};

export default DefaultLayout;
