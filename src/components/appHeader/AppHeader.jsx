import React from 'react';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='app__header'>
        <div className="app__logo"></div>
        <h1 className="app__title">
            <span>Rick & Morty</span> information portal 
        </h1>
    </header>
  )
}

export default AppHeader;