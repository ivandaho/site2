import React from 'react';

import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import IndexPageComponent from './components/IndexPageComponent.jsx';
import VideoPageComponent from './components/VideoPageComponent.jsx';
import NoComponent from './components/NoComponent.jsx';
import DocumentTitle from 'react-document-title';

const App = ({children}) => (
    <DocumentTitle title="Ivan's site">
        {children}
    </DocumentTitle>
)

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={IndexPageComponent} />
            <Route path="/videos" component={VideoPageComponent} />
        <Route path="*" component={NoComponent} />
        </Route>
    </Router>,
    document.getElementById('app')
);
