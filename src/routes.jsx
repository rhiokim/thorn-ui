import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Users from './containers/Users';
import Articles from './containers/Articles';

import Dashboard from './components/dashboard/Dashboard'
import NewRule from './components/rules/NewRule'
import Rules from './components/rules/Rules'
import RuleSets from './components/rules/RuleSets'
import NewWhitelist from './components/rules/NewWhitelist'
import Whitelists from './components/rules/Rules'
import WhitelistSets from './components/rules/WhitelistSets'
import PortForwarding from './components/netfilter/PortForwarding'
import IPTable from './components/netfilter/IPTable'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="users" component={Users} />
    <Route path="articles" component={Articles} />
    <Route path="rules">
      <IndexRoute component={Rules} />
      <Route path="new" component={NewRule} />
      <Route path="sets" component={RuleSets} />
    </Route>
    <Route path="whitelists">
      <IndexRoute component={Whitelists} />
      <Route path="new" component={NewWhitelist} />
      <Route path="sets" component={WhitelistSets} />
    </Route>
    <Route path="netfilter">
      <Route path="portfowarding" component={PortForwarding} />
      <Route path="iptable" component={IPTable} />
    </Route>
  </Route>
);
