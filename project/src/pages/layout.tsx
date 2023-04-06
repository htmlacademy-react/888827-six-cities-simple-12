import {Outlet} from 'react-router-dom';
import Logo from '../components/logo/logo';
import Header from '../components/header/header';

function Layout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <Header />
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}

export default Layout;
