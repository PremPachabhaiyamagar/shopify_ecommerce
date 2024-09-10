import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export const Revieww = () => {
	return (
		<div className="w-[90vw] h-auto bg-zinc-200 mt-10 py-5 px-5 rounded-xl  ">
			<p className="text-lg font-bold py-1">Alan</p>
			<div className="flex items-center  py-1">
				<AiOutlineStar />
				<AiOutlineStar />
				<AiOutlineStar />
				<AiOutlineStar />
				<AiOutlineStar />
			</div>
			<p className="text-lg font-bold py-1">2022-1-1</p>
			<div className="py-5 bg-[#c1f5fb] rounded-xl mt-5">
				<p className="text-lg">This shoe is really Awesome</p>
			</div>
		</div>
	);
};
export default Revieww;
