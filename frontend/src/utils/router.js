import React from "react";
import Login from "../pages/Login";
import ConfirmPassword from "../pages/ConfirmPassword";
import ForgetPassword from "../pages/ForgetPassword";
import Identifier from "../pages/Identifier";
import Register from "../pages/Register";

// eslint-disable-next-line
export default [
	{
		path: '/',
		exact: true,
		component: () => <Identifier />,
	},
	{
		path: '/register',
		component: () => <Register />,
	},
	{
		path: '/login',
		component: () => <Login />,
	},
	{
		path: '/forget-password',
		component: () => <ForgetPassword />,
	},
	{
		path: '/confirm-password',
		component: () => <ConfirmPassword />,
	},
];