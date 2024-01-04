import "../../assets/css/collapse/collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronUp,
	faChevronDown,
} from "@fortawesome/fontawesome-free-solid";
import { useState, useRef, useEffect } from "react";

function Collapse({ title, content }) {
	const [open, setIsOpen] = useState(false);

	function collapseButton() {
		if (open === false) setIsOpen(true);
		else setIsOpen(false);
	}

	return (
		<>
			<div className="collapse">
				<div className="collapseHeading">
					<h4>{title}</h4>
					<button type="button" className="button" onClick={collapseButton}>
						{open ? (
							<FontAwesomeIcon icon={faChevronUp} />
						) : (
							<FontAwesomeIcon icon={faChevronDown} />
						)}
					</button>
				</div>

				{open ? (
					<div className={`collapseContent ${open ? "open" : ""}`}>
						{content}
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default Collapse;
