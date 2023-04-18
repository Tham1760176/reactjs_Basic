import React from 'react';
import { Input } from 'antd';
import { Container } from 'react-bootstrap';
import './style.css';

const Search = () => {
  return (
    <Container>
      <div className="search">
        <Input placeholder="Input search text" />
        <button type="Primary">Search</button>
      </div>
    </Container>
  );
};

export default Search;
