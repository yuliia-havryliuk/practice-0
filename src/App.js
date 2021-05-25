import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import ProtectedUserPage from './components/ProtectedUserPage/ProtectedUserPage';
import NotProtectedUserPage from './components/NotProtectedUserPage/NotProtectedUserPage';
import NotAuthorized from './components/NotAuthorized/NotAuthorized';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div>
      <Layout>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <ProtectedRoute path='/protected' component={ProtectedUserPage} />
          <Route path="/unauthorized">
            <NotAuthorized />
          </Route>
          <Route path="/">
            <NotProtectedUserPage />
          </Route>
        </Switch>
      </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
