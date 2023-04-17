import classes from './drawer.module.css';

export const Drawer = () => {
  return (
    <div className={classes.drawerContainer}>
      <h1>Drawer Menu</h1>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </ul>
    </div>
  );
};
