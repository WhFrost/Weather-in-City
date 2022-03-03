import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import {rootReducer} from './root-reducer';
import {createAPI} from '../services/api';
import {ActionCreator} from './action';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(
      createAPI(() => store.dispatch(ActionCreator.setWeatherFetchError('incorrect API key'))),
    ))
  )
);

export {
  store
};
