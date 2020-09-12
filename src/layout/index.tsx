import './index.scss';
import React from 'react';
import Menu from 'components/Menu'

type Props = {
  children: React.ReactElement,
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className="Layout">
    <header className="Layout__header">
      <h1>Test technique React.js</h1>
      <Menu/>
    </header>
    <main className="Layout__main">
      {children}
    </main>
  </div>
);

export default Layout;
