import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useRef, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, LOCATIONS} from '../../components/const/const';
import {toast} from 'react-toastify';
import Logo from '../../components/logo/logo';

function LoginRender(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const isPasswordValidate = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/g;
    return regex.test(password);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (isPasswordValidate(passwordRef.current.value)) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        toast.warn('Passwords must contain: minimum of 1 letter and minimum of 1 numeric character [0-9]');
      }
    }
  };

  return (
    authStatus === AuthorizationStatus.Auth ?
      <Navigate to={AppRoute.Main} /> : (
        <>
          <Helmet>
            <title>Sign in</title>
          </Helmet>
          <div className="page page--gray page--login">
            <div style={{display: 'none'}}>
              <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
            </div>

            <header className="header">
              <div className="container">
                <div className="header__wrapper">
                  <Logo />
                </div>
              </div>
            </header>

            <main className="page__main page__main--login">
              <div className="page__login-container container">
                <section className="login">
                  <h1 className="login__title">Sign in</h1>
                  <form className="login__form form" action="" onSubmit={handleSubmit} method="post">
                    <div className="login__input-wrapper form__input-wrapper">
                      <label className="visually-hidden">E-mail</label>
                      <input ref={loginRef} type="email" name="email" id="name" placeholder="Email" className="login__input form__input" required />
                    </div>
                    <div className="login__input-wrapper form__input-wrapper">
                      <label className="visually-hidden">Password</label>
                      <input ref={passwordRef} className="login__input form__input" type="password" name="password" id="password" placeholder="Password" required />
                    </div>
                    <button onClick={() => navigate(AppRoute.Login)} className="login__submit form__submit button" type="submit">
                      Login
                    </button>
                  </form>
                </section>
                <section className="locations locations--login locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/">
                      <span>{LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]}</span>
                    </Link>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </>
      )
  );
}

export default LoginRender;
