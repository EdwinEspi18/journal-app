import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { googleAuthProvider } from '../firebase/config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: types.errRegister, payload: err });
        dispatch(finishLoading());
        Swal.fire('Error', err.message, 'error');
      });
  };
};
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        dispatch({ type: types.errRegister, payload: err });
        Swal.fire('Error', err.message, 'error');
      });
  };
};
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};
export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
export const startLogout = () => {
  return async (dispatch) => {
    await signOut(getAuth());
    dispatch(logout());
  };
};
export const logout = () => ({ type: types.logout });
