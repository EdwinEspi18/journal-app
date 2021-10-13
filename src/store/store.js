import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { authReducer } from '../reducers/auth.reducer';
import { registerReducer } from '../reducers/register.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers =
  (typeof window !== 'undefined' && composeWithDevTools) || compose;

const reducers = combineReducers({ auth: authReducer, ui: registerReducer });

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
