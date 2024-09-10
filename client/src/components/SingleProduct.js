import React from "react";
import AddToCart from "./AddToCart";
import Header from "./Header";
import Navbar from "./Navbar";
import Revieww from "./Review";
import Search from "./Search";
import SingleCard from "./SingleCard";
import Footer from "./Footer";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getInitial } from "../actions";
import Loader from "./Loader";

export const SingleProduct = (props) => {
	const [param, setParam] = useState({});

	const params = useParams();
	const [loading, setLoading] = useState(false);
	useLayoutEffect(() => {
		setParam(params.id);

		//if (!props.user) navigate("/login");
	}, [loading]);

	return (
		<div>
			<div className="flex flex-col items-center ">
				<Header />
				<Navbar />
				<Search />
				{!loading ? (
					<>
						<SingleCard
							params={params}
							loading={loading}
							setLoading={setLoading}
						/>
						<AddToCart params={params} />
					</>
				) : (
					<Loader />
				)}

				<Revieww />
				<Revieww />
				<Revieww />
				<Revieww />
				<Footer />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		post: state.post,
		user: state.user,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getInitialData: () => dispatch(getInitial()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
