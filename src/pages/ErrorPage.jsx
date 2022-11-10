import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
	const err = useRouteError();
	return (
		<>
			<MainNavigation />
			<main>
				<h2>Sorry something went wrong</h2>
				<h4>{err.message}</h4>
			</main>
		</>
	);
};

export default ErrorPage;
