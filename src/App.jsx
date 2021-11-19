import { useEffect, useState } from "react";
import "./App.scss";
import { Desktop } from "./components/Desktop";
import Screen from "./components/Screen";
import Taskbar from "./components/Taskbar";

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		window.addEventListener("contextmenu", e => e.preventDefault());

		return () =>
			window.removeEventListener("contextmenu", e => e.preventDefault());
	}, []);

	return (
		<div className="App">
			<Desktop>
				<Screen />
				<Taskbar />
			</Desktop>
		</div>
	);
}

export default App;
