import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

/**
 * Customized CSS for App initilization
 */
// import './assets/css/normalize.css';
import './assets/css/icomoon/styles.css';
import './assets/_main/bootstrap.less';
import './assets/_main/core.less';
import './assets/_main/colors.less';
// import './assets/sass/_.scss';

import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const root = document.body.appendChild(document.createElement('div'));
const App = () =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>;

render(<App />, root);
