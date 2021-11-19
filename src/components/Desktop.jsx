import bg from "../assets/img/bg.jpg";

export const Desktop = ({ children }) => {
	return (
		<div
			className="desktop"
			style={{
				background: `url(${bg}) no-repeat center / cover`,
			}}
		>
			{children}
		</div>
	);
};
