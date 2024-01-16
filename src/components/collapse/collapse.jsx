import "../../assets/css/collapse/collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronUp,
	faChevronDown,
} from "@fortawesome/fontawesome-free-solid";
import { useState, useRef, useEffect } from "react";

function Collapse({ title, content }) {
	const [open, setIsOpen] = useState(false);

	function renderContent(title) {
		if (title === "equipements") {
			return content.map((item, index) => {
				return <span key={index}>{item}</span>;
			});
		} else {
			return <div className={`collapseContent open`}>{content}</div>;
		}
	}

	function collapseButton() {
		if (open === false) setIsOpen(true);
		else {
			return setIsOpen(false);
		}
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
				{open ? renderContent(content) : <></>}
			</div>
		</>
	);
}

export default Collapse;
