import React, { useState } from "react";
import { useEffect, useLayoutEffect } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getInitial, logout, getInitialDataCartData } from "../actions";

export const Navbar = (props) => {
	const navigate = useNavigate();
	const [toogle, setToogle] = useState(false);
	const [length, setLength] = useState(0);
	useEffect(() => {
		helper();
		setLength(props?.cart?.cartProducts?.length);
		//  if (props.user.token === null) {
		//  	navigate("/login");
		//  }
	}, [
		props?.user?.user?.user?._id ||
			props?.cart?.cartProducts.length ||
			props.cart,
	]);

	var id = props?.user?.user?.user?._id;

	const helper = async () => {
		props.getInitialData();
		if (
			props?.user?.user?.user?._id !== undefined &&
			props?.cart?.cartProducts
		) {
			props.getCartData(props?.user?.user?.user?._id);

			//await
		} //initial req giving undefined
	};

	const openDropdown = (e) => {
		let selector = document.getElementById("myDropdown");
		if (toogle == false) {
			selector.classList.remove("hidden");
			setToogle(true);
		} else {
			selector.classList.add("hidden");
			setToogle(false);
		}
	};

	const logoutUser = () => {
		props.logOut();
		navigate("/login");
	};
	const purchasePage = (e) => {
		e.preventDefault();
		let id = props?.user?.user?.user?._id;
		navigate(`/my-items/${id}`);
	};

	return (
		<div className="w-[100vw] h-[10vh] border-2 flex justify-between items-center  px-2">
			<img
				src="/run8.png"
				className="h-12 w-12  sm:h-14 w-14 md:h-15 w-15 lg:w-20 h-25 px-2"
				onClick={(e) => navigate("/")}
			/>
			<div className="border-2 py-2 flex items-center justify-center hidden lg:block">
				<input
					placeholder="Enter your name"
					className="px-2 h-10 w-[60vw] rounded-lg shadow"
				/>
				<button className="mx-2 h-10 text-center text-sm bg-black hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
					SEARCH
				</button>
			</div>

			<div className="flex items-center justify-center">
				<Link to="">
					<div
						className="flex h-2/3 w-3/4 md:h-[50px] w-[60px] md:w-3/4 border-2 justify-between items-center px-2 py-2 mr-3 text-lg md:text-2xl"
						onClick={(e) => openDropdown(e)}
					>
						<CgProfile className="mr-1 " />
						<MdArrowDropDown className="" />
					</div>
					<div
						id="myDropdown"
						class="dropdown-content flex flex-col absolute shadow bg-[#f1f1f1] h-[120px] w-[90px] p-1 justify-between hidden"
					>
						<a href="#home" className="hover:bg-[#bbb]">
							Profile
						</a>

						<a
							href="#about"
							className="hover:bg-[#bbb]"
							onClick={(e) => logoutUser()}
						>
							Logout
						</a>
						<a
							href="#contact"
							className="hover:bg-[#bbb]"
							onClick={(e) => purchasePage(e)}
						>
							Purchases
						</a>
					</div>
				</Link>
				{id !== undefined && (
					<Link to={`/cart/${id}`}>
						<BsFillBagPlusFill className=" text-2xl md:text-3xl" />
						<div className=" relative bottom-7  h-4 w-3 border-10 bg-red-500 text-white">
							{props.user.user == null ? 0 : props.cart.cartProducts.length}
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getInitialData: () => dispatch(getInitial()),
		logOut: () => dispatch(logout()),
		getCartData: (obj) => dispatch(getInitialDataCartData(obj)),
	};
};
const mapStateToProps = (state) => {
	return {
		post: state.post,
		user: state.user,
		cart: state.cart,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
