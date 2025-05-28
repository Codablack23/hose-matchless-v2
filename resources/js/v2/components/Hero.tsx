/** @format */

const Home = () => {
	return (
		<div className="mx-auto flex gap-8 items-center py-[80px] max-w-[1196px] px-4">
			<div className="flex-1">
				<p className="text-[64px] font-black leading-tight">
					Empowering
				Talent <span className="font-normal">and</span> Innovating Entertainment Globally
				</p>
				<button className="w-full rounded-xl h-[73px] my-5 text-[24px]  font-black text-white bg-primary">
					Join Our Creator Network
				</button>
				<button className="w-full rounded-xl h-[73px] my-5 text-[24px]  font-black text-white bg-primary">
					Join Our Creator Network
				</button>
			</div>
			<div className="flex-[2]">
				<div className="h-[600px] rounded-md">
					<img className="h-[600px] w-full object-cover rounded-3xl" src="/assets/banner.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
