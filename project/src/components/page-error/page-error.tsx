import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import HeaderNav from '../header-nav/header-nav';
import './style.css';


function PageError (): JSX.Element {
  return (
    <Fragment>
      <HeaderNav />
      <section className="error container">
        <h1>404. Page not found</h1>
        <div className="error__block">
          <img className="error__image" src="img/error.png" alt="Page not found" />
          <Link className="error__link" to="/">
            Go back to main page
          </Link>
        </div>
      </section>
    </Fragment>
  );
}

export default PageError;
