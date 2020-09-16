import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactElement,
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className="Layout">
    <header className="Layout__header">
      <h1>Test technique React.js</h1>
      <nav className='header__menu'>
        <Link to='/home'>Home</Link>
        <Link to='/todos'>Todos</Link>
      </nav>
    </header>
    <main className="Layout__main">
      {children}
    </main>
  </div>
);

export default Layout;
