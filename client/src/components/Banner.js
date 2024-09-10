import React from "react";
import "../index.css";

export const Banner = () => {
	return (
		<div className="banner w-[100vw] border h-[350px] lg:h-[700px] text-white flex flex-col items-center sm:h-[450px] justify-center lg:mb-[200px]">
			<p className="font-bolder text-2xl lg:text-6xl mt-10">
				DO YOU NEED MORE TIPS
			</p>
			<p className="font-bolder text-xl lg:text-3xl lg:mt-7 mt-3">
				Sign up free and get the latest tips
			</p>
			<input
				placeholder="Your Email"
				className="py-2 px-2 mt-8 rounded-2xl lg:w-[70vw] lg:py-4"
			></input>
			<button className="bg-green-500 px-10 py-2 rounded-xl w-3/4 mt-5 lg:w-1/2 lg:mt-10">
				YES,I WANT
			</button>
		</div>
	);
};
export default Banner;
