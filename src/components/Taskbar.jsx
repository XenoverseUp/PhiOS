const Taskbar = () => {
	return (
		<div className="taskbar">
			<Icon>
				<img
					className="start-icon icon"
					src="https://img.icons8.com/fluency/96/000000/windows-11.png"
				/>
			</Icon>
		</div>
	);
};

export default Taskbar;

const Icon = ({ children }) => <div className="taskbar-icon">{children}</div>;
