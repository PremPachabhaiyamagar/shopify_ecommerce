import React from "react";

export const Search = () => {
	return (
		<div className="border-2 mt-10 py-5 px-5 flex items-center justify-center  lg:hidden">
			<input
				placeholder="Enter Product Name"
				className="px-2 h-10 w-[60vw] rounded-lg shadow"
			/>
			<button className="mx-2 h-10 text-center text-sm bg-black hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
				SEARCH
			</button>
		</div>
	);
};
export default Search;
