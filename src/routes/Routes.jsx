import * as React from 'react';
import { Routes, Route, BrowserRouter, withRouter } from 'react-router-dom';
import RoutesList from './RouteList';
import Header from '../pages/Header/Header';
import Sidebar from '../pages/Header/Sidebar';

class AllRoutes extends React.Component {
  render() {
    return (
      <Sidebar>
        <Header>
        <Routes>
          {RoutesList.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
        </Header>
        </Sidebar>
    );
  }
}

export default AllRoutes;
