import { ReactNode } from 'react';
import { Header } from './components/Header/Header';
import classes from './layout.module.css';
import { Drawer } from './components/Drawer/Drawer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <Drawer />
      <main>{children}</main>
    </div>
  );
};
