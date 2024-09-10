import React from "react";
import Header from "./Header";
import Search from "./Search";
import Navbar from "./Navbar";
import RegisterCard from "./RegisterCard";

export const Register = () => {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<Navbar />
			<Search />
			<RegisterCard />
		</div>
	);
};
export default Register;
