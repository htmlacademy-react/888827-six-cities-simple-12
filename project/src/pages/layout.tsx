import {Outlet} from 'react-router-dom';
import Header from '../components/header/header';

function Layout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Outlet/>
    </div>
  );
}

export default Layout;
