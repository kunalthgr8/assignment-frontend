import { useNavigate } from "react-router-dom";

const Logo = () => {
	const navigate = useNavigate();

	return (
		<div
			className="flex items-center gap-x-2 cursor-pointer"
			onClick={() => navigate("/")}
		>
			<figure>
				<img
					src="logo-filled.svg"
					alt="Girman Technologies"
					className="size-12"
				/>
			</figure>
			<span className="flex flex-col items-center justify-center">
				<h2 className="text-2xl font-poppins font-bold">Girman</h2>
				<h3 className="text-[9px] font-poppins font-semibold uppercase tracking-[1.75px] ml-0.5">
					Technologies
				</h3>
			</span>
		</div>
	);
};
export default Logo;