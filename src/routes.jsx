import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Users from './containers/Users';
import Articles from './containers/Articles';

import Dashboard from './components/dashboard/Dashboard'
import NewRule from './components/rules/NewRule'
import Rules from './components/rules/Rules'
import RuleView from './components/rules/RuleView'
import RuleEdit from './components/rules/RuleEdit'
import RuleSets from './components/rulesets/RuleSets'
import RuleSetView from './components/rulesets/RuleSetView'
import RuleSetEdit from './components/rulesets/RuleSetEdit'
import NewWhitelist from './components/rules/NewWhitelist'
import Whitelists from './components/rules/Rules'
import WhitelistSets from './components/rules/WhitelistSets'
import PortForwarding from './components/netfilter/PortForwarding'
import IPTable from './components/netfilter/IPTable'
import NewIPTable from './components/netfilter/NewIPTable'
import NewPort from './components/netfilter/NewPort'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="users" component={Users} />
    <Route path="articles" component={Articles} />
    <Route path="rules">
      <IndexRoute component={Rules} />
      <Route path="new" component={NewRule} />
      <Route path=":id" component={RuleView} />
      <Route path=":id/edit" component={RuleEdit} />
    </Route>
    <Route path="rulesets">
      <IndexRoute component={RuleSets} />
      <Route path=":id" component={RuleSetView} />
      <Route path=":id/edit" component={RuleSetEdit} />
    </Route>
    <Route path="whitelists">
      <IndexRoute component={Whitelists} />
      <Route path="new" component={NewWhitelist} />
      <Route path="sets" component={WhitelistSets} />
    </Route>
    <Route path="netfilter">
      <Route path="ports">
        <IndexRoute component={PortForwarding} />
        <Route path="new" component={NewPort} />
      </Route>
      <Route path="iptable">
        <IndexRoute component={IPTable} />
        <Route path="new" component={NewIPTable} />
      </Route>
    </Route>
  </Route>
);
