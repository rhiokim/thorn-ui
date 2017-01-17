import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Users from './containers/Users';
import Articles from './containers/Articles';

import Dashboard from './components/dashboard/Dashboard'
import RuleCreate from './components/rules/RuleCreate'
import Rules from './components/rules/Rules'
import RuleView from './components/rules/RuleView'
import RuleEdit from './components/rules/RuleEdit'
import RuleSets from './components/rulesets/RuleSets'
import RuleSetView from './components/rulesets/RuleSetView'
import RuleSetEdit from './components/rulesets/RuleSetEdit'
import Whitelists from './components/whitelists/Whitelists'
import WhitelistView from './components/whitelists/WhitelistView'
import WhitelistEdit from './components/whitelists/WhitelistEdit'
import WhitelistCreate from './components/whitelists/WhitelistCreate'
import WhitelistSets from './components/whitelistsets/WhitelistSets'
import WhitelistSetEdit from './components/whitelistsets/WhitelistSetEdit'
import WhitelistSetView from './components/whitelistsets/WhitelistSetView'
import IPTable from './components/iptables/IPTable'
import IPTableCreate from './components/iptables/IPTableCreate'
import Forwarding from './components/iptables/Forwarding'
import ForwardingCreate from './components/iptables/ForwardingCreate'
import ForwardingEdit from './components/iptables/ForwardingEdit'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="users" component={Users} />
    <Route path="articles" component={Articles} />
    <Route path="rules">
      <IndexRoute component={Rules} />
      <Route path="new" component={RuleCreate} />
      <Route path="sets/:ruleSetFile" component={Rules} />
      <Route path=":id" component={RuleView} />
      <Route path="edit/:id" component={RuleEdit} />
    </Route>
    <Route path="rulesets">
      <IndexRoute component={RuleSets} />
      <Route path="new" component={RuleSetEdit} />
      <Route path=":id" component={RuleSetView} />
      <Route path="edit/:id" component={RuleSetEdit} />
    </Route>
    <Route path="whitelists">
      <IndexRoute component={Whitelists} />
      <Route path="new" component={WhitelistCreate} />
      <Route path="sets/:ruleSetFile" component={Whitelists} />
      <Route path=":id" component={WhitelistView} />
      <Route path="edit/:id" component={WhitelistEdit} />
    </Route>
    <Route path="whitelistsets">
      <IndexRoute component={WhitelistSets} />
      <Route path="new" component={WhitelistSetEdit} />
      <Route path=":id" component={WhitelistSetView} />
      <Route path="edit/:id" component={WhitelistSetEdit} />
    </Route>
    <Route path="iptables">
      <IndexRoute component={IPTable} />
      <Route path="new" component={IPTableCreate} />
      <Route path="forwarding" component={Forwarding} />
    </Route>
    <Route path="forward">
      <IndexRoute component={Forwarding} />
      <Route path="new" component={ForwardingCreate} />
      <Route path="edit/:id" component={ForwardingEdit} />
    </Route>
  </Route>
);
