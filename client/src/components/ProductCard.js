import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export const ProductCard = ({ post }) => {
	console.log(post);
	const changePage = (i) => {};
	return (
		<div
			className="w-[80vw]  sm:w-[50vw] md:w-[40vw]  gap-x-1 h-auto rounded shadow border-2 p-2 my-10"
			onClick={(i) => changePage(i)}
		>
			<div className="flex items-center justify-center mb-7">
				<img src={post.photo_url} className="h-1/5 w-4/5 max-w-sm shadow-lg" />
			</div>
			<p>{post.title}</p>
			<div className="flex mt-3 mb-3">
				<AiOutlineStar />
				<AiOutlineStar />
				<AiOutlineStar />
				<AiOutlineStar />
				<AiOutlineStar />
			</div>
			<h1 className="font-black text-xl">${post.price}</h1>
		</div>
	);
};
export default ProductCard;
