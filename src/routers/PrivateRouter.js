import { Redirect, Route } from 'react-router-dom';

export const PrivateRouter = ({ logged, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				logged ? <Component {...props} /> : <Redirect to="/signin" />
			}
		/>
	);
};
