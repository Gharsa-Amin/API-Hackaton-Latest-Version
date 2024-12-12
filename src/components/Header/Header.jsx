export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <a href="./index.html" className="header__logo">
            <p className="header__logo-para">GapDap</p>
          </a>
          <ul className="header__list">
            <li className="header__item">
              <a className="header__item--login" href="./index.html">
                Log In
              </a>
            </li>
            <li className="header__item">
              <a className="header__item--Signup" href="./index.html">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
