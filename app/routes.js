import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Popup from './components/popup';
import Input from './containers/input';


export default (
	<Route path="/" component={Popup}>
		<IndexRoute component={Input} />
	</Route>
);
