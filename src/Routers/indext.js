import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Routes from './Router';
// import MessageCatalog from '../Components/MessageCatalog/Index';
// import AlertRuleTable from '../Components/AlertRule/Index';
export const RouterApp = (props) => {

    return (
        <Router>
            <Switch>
                {/* <Redirect exact path="/" to={Routes.MessageCatalog} />
                <Route exact component={MessageCatalog} path={Routes.MessageCatalog} />
                <Route exact component={AlertRuleTable} path={Routes.AlertRule} /> */}
            </Switch>
        </Router>
    )
}

export default (RouterApp); 