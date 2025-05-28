/** @format */

import { Link } from "@inertiajs/react";
import navicon from "../assets/navicon.svg";

const Navbar = () => {
	return (
		<div className="sticky inset-x-0 top-0 z-50 py-5 text-lg text-white bg-primary px-28 2xl:px-10 2xl:mx-auto 2xl:max-w-screen-xl">
			<header className="relative flex items-center gap-20">
				<Link href={"/"}>
					<div className="flex items-center gap-2">
						<img src={navicon} />
						<h1 className="text-lg font-bold">HOSE MATCHLESS</h1>
					</div>
				</Link>

				<div className="flex gap-5 navlinks__wrp">
					<Link href={""}>Home</Link>
					<Link href={""}>About Us</Link>
					<Link href={""}>Services</Link>
					<Link href={""}>Events</Link>
					<Link href={""}>Contact Us</Link>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
