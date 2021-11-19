import { motion, AnimatePresence } from "framer-motion";
import contextMenu from "../animations/contextMenu";

export const ContextMenu = ({ position, type = "default", contextMenuRef }) => {
	return (
		<motion.div
			variants={contextMenu}
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{
				type: "tween",
				ease: "backOut",
				duration: 0.35,
			}}
			ref={contextMenuRef}
			style={{
				left: position[0],
				top: position[1],
			}}
			className="context-menu"
		>
			<div className="head">
				<div className="context-head-icon">∅</div>
				<div className="context-head-icon">∆</div>
				<div className="context-head-icon">∭</div>
			</div>
			<div className="context-separator" />
			<ul>
				<li>Sample</li>
				<li>Sample</li>
				<li>Sample</li>
				<li>Sample</li>
				<li>Sample</li>
			</ul>
		</motion.div>
	);
};
