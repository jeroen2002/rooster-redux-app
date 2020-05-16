import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';

import rootReducer from '../../state/reducers';


const store = createStore(rootReducer);

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
