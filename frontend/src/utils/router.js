import React from "react";
import Gallery from "../page/Gallery";
import Home from "../page/Home";
import Login from "../page/Login";

// eslint-disable-next-line
export default [
	{
		path: '/',
		exact: true,
		component: () => <Home />,
	},
	{
		path: '/identifier',
		component: () => <Login />,
	},
	{
		path: '/login',
		component: () => <Gallery />,
	},
	{
		path: '/forget-password',
		component: () => <Gallery />,
	},
];