import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store/store";
import "./App.css";
import Header from "./components/userComponent/Header/Header";
import LoginM from "./components/userComponent/AuthLogin/AuthLogin";
import RegisterM from "./components/userComponent/AuthRegister/AuthRegister";
import Home from "./pages/Panel/Home";
import Profile from "./pages/Panel/Profile";
import Payment from "./pages/Panel/Payment";
import Transaction from "./pages/Panel/Transaction";

import TryFunct from "./pages/Panel/try";
import History from "./pages/Panel/History";
import AddMovie from "./pages/Add/AddArtist";
import AddArtist from "./pages/Add/AddMusic";
// import AddEpisode from './pages/Panel/Episode';
import { Provider } from "react-redux";

import PrivateRoute from "./components/userComponent/Routing/PrivateRoute";
import PrivateAdminRoute from "./components/userComponent/Routing/PrivateAdminRoute";

import NotFound from "./components/BadUrl/BadUrl";

import Scrolling from "./components/userComponent/Scrolling/Scrolling";

import { loadUser } from "./redux/actions/auth";
import { setAuthToken } from "./config/api";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const showModalLogin = () => {
    setModalLogin(!modalLogin);
    setModalRegister(false);
  };

  const showModalRegister = () => {
    setModalRegister(!modalRegister);
    setModalLogin(false);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Header
            showModalLogin={showModalLogin}
            showModalRegister={showModalRegister}
          />
          <Scrolling>
            <Switch>
              <Route exact path="/" component={Home} />

              <PrivateRoute exact path="/history" component={History} />
              <PrivateRoute exact path="/payment" component={Payment} />
              <PrivateRoute exact path="/profile" component={Profile} />

              <PrivateAdminRoute
                exact
                path="/transaction"
                component={Transaction}
              />
              <Route exact path="/try" component={TryFunct} />

              <PrivateAdminRoute
                exact
                path="/add-artist"
                component={AddMovie}
              />
              <PrivateAdminRoute exact path="/add-song" component={AddArtist} />

              <Route component={NotFound} />
            </Switch>
          </Scrolling>

          {modalLogin && (
            <LoginM showModalLogin={showModalLogin} modalLogin={modalLogin} />
          )}
          {modalRegister && (
            <RegisterM
              showModalRegister={showModalRegister}
              modalRegister={modalRegister}
            />
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
