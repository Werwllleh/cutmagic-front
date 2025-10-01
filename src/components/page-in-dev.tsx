"use client"

import React from 'react';

const PageInDev = () => {
  return (
    <div className="page-in-dev">
      <div className="page-in-dev__body">
        <h1 className="page-in-dev__title h1">Страница в разработке</h1>
      </div>
      <div className="page-in-dev__bg">
        <img className="page-in-dev__bg--image" src="/images/pic-in-dev.webp" alt="Страница в разработке"/>
      </div>
    </div>
  );
};

export default PageInDev;
