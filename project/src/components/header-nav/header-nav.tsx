import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../const/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';

function HeaderNav (): JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  const handleOutClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authStatus === AuthorizationStatus.Auth &&
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{userData?.email}</span>
          </div>}
        </li>
        <li className="header__nav-item">
          {authStatus === AuthorizationStatus.Auth &&
          <Link className="header__nav-link" to="/login" onClick = {handleOutClick}>
            <span className="header__signout">Log Out</span>
          </Link>}
          {authStatus === AuthorizationStatus.NoAuth &&
          <Link className="header__nav-link header__nav-link--profile" to="/login">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Login</span>
          </Link>}
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
