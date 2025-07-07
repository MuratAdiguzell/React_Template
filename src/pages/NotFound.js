import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Sayfa Bulunamadi.</h2>
      <p>Aradiğiniz sayfa bulunamadi veya taşinmiş olabilir</p>
      <Link to="/" className="home-link">Anasayfaya Dön.</Link> 
    </div>
  );
};

export default NotFound; 