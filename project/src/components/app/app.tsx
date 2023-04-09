import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../const/const';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import MainRender from '../../pages/main/main';
import LoginRender from '../../pages/login/login';
import RoomRender from '../../pages/room/room';
import PageError from '../page-error/page-error';
//import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Layout from '../../pages/layout';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  //const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              path={AppRoute.Main}
              element={
                <MainRender />
              }
            />
            <Route
              path={AppRoute.Room}
              element={<RoomRender />}
            />
            <Route
              path="*"
              element={<PageError />}
            />
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginRender />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
