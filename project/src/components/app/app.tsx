import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const/const';
import {HelmetProvider} from 'react-helmet-async';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks';
import MainRender from '../../pages/main/main';
import LoginRender from '../../pages/login/login';
import RoomRender from '../../pages/room/room';
import PageError from '../page-error/page-error';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppRenderProps = {
  reviews: Review[];
}

function App({reviews}: AppRenderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainRender />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <LoginRender />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<RoomRender reviews={reviews} />}
          />
          <Route
            path="*"
            element={<PageError />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
