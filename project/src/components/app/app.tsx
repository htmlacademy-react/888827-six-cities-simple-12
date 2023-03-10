import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { HelmetProvider } from 'react-helmet-async';
import MainRender from '../../pages/main/main';
import LoginRender from '../../pages/login/login';
import RoomRender from '../../pages/room/room';
import PageError from '../page-error/page-error';
import PrivateRoute from '../private-route/private-route';

type AppRenderProps = {
  placeSelection: number;
}

function App({placeSelection}:AppRenderProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainRender placeSelection={placeSelection} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginRender />}
          />
          <Route
            path={AppRoute.Room}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <RoomRender/>
              </PrivateRoute>
            }
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
