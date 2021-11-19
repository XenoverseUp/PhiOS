import { useEffect, useRef, useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { useOnClickOutside } from "../hooks";
import { AnimatePresence } from "framer-motion";

const Screen = () => {
	const [context, setContext] = useState({
		open: false,
		type: "default",
		position: [0, 0],
	});

	const contextMenuRef = useRef(null);

	const handleContextMenu = e => {
		setContext({ ...context, open: true, position: [e.clientX, e.clientY] });
	};

	useEffect(() => console.log(context), []);

	useOnClickOutside(contextMenuRef, () => {
		setContext({ ...context, open: false });
		console.log("mn");
	});

	return (
		<div className="screen" onContextMenu={handleContextMenu}>
			<AnimatePresence>
				{context.open && <ContextMenu {...{ contextMenuRef, ...context }} />}
			</AnimatePresence>
		</div>
	);
};

export default Screen;
