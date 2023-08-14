import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import starList from '../../mock/starList';
import './style.css';

function App() {
  return (
      <PageWrapper stars={starList} />
  );
}

export default App;
