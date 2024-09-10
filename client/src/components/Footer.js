import React from "react";

export const Footer = () => {
	return (
		<div className="w-full h-[10vh] border bg-[#ececec] flex justify-around items-center px-5 mt-10">
			<img src="/mastercard.png" className="h-[40px] w-[40px]" />
			<img src="/visa.png" className="h-[40px] w-[40px]" />
			<img src="/paypal.png" className="h-[40px] w-[40px]" />
			<img src="/discover.png" className="h-[40px] w-[40px]" />
		</div>
	);
};
export default Footer;
