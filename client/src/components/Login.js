import React from "react";
import Header from "./Header";
import Search from "./Search";
import Navbar from "./Navbar";
import LoginCard from "./LoginCard";

export const Login = () => {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<Navbar />
			<Search />
			<LoginCard />
		</div>
	);
};
export default Login;
