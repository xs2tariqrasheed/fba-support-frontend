/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Test from '../Test/Loadable';

// import loadable from '@loadable/component';
// const Test = loadable(() => import('containers/Test'));

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  );
}
