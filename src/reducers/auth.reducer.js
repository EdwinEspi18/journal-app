import { types } from '../types/types';

export const authReducer = (state = { err: { code: null } }, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return { err: { code: null } };
    case types.errRegister:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
