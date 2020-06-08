import React, { lazy, Suspense, useEffect } from 'react';

import { connect } from 'react-redux';

import { Redirect, Route, Switch } from 'react-router-dom';

import { checkUserSession } from 'redux/user/user.actions';
import { selectCurrentUser } from 'redux/user/user.selectors';

import { createStructuredSelector } from 'reselect';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundaryComponent';
import Header from 'components/HeaderComponent/HeaderComponent';
import Spinner from 'components/Spinner/SpinnerComponent';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/SignInSignUp/SignInSignUp'),
);
const CheckoutPage = lazy(() => import('./pages/Checkout/CheckoutComponent'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />

            <Route path="/shop" component={ShopPage} />

            <Route exact path="/checkout" component={CheckoutPage} />

            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
