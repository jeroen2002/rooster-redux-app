import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import PropTypes from 'prop-types';

import rootReducer from '../../state/reducers';


const store = createStore(rootReducer, applyMiddleware(thunk));

function StateProvider(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
