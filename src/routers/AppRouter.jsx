import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import JournalScreen from '../components/JournalScreen';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLogggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogggedIn(true);
      } else {
        setIsLogggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <h1>Espere...</h1>;
  }
  return (
    <HashRouter basename="/">
      <div>
        <Switch>
          <PublicRoute
            isAuth={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoute
            isAuth={isLoggedIn}
            exact
            path="/"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
