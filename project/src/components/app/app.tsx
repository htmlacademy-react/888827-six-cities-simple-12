import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { Offers, City, Points } from '../../types/offer';
import MainRender from '../../pages/main/main';
import LoginRender from '../../pages/login/login';
import RoomRender from '../../pages/room/room';
import PageError from '../page-error/page-error';
import PrivateRoute from '../private-route/private-route';

type AppRenderProps = {
  placeSelection: number;
  offers: Offers;
  city: City;
  points: Points;
}

function App(props: AppRenderProps): JSX.Element {
  const {placeSelection, offers, city, points} = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainRender
                placeSelection={placeSelection}
                offers={offers}
                city={city}
                points={points}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <LoginRender />
              </PrivateRoute>
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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
