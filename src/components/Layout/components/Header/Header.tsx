import classes from './header.module.css';

export const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <h1>Logo</h1>
      <input placeholder='Search Component' />
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Favorites</a>
          </li>
        </ul>
      </nav>
      <h1>💡</h1>
    </header>
  );
};
