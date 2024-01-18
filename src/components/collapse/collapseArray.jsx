import "../../assets/css/collapse/collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronUp,
	faChevronDown,
} from "@fortawesome/fontawesome-free-solid";
import { useState, useRef, useEffect } from "react";
import "../../assets/css/collapse/collapseArray.css";

function CollapseArray({ title, content }) {
	const [open, setIsOpen] = useState(false);

	function collapseButton() {
		console.log(content);

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
				{open ? (
					<div className={`collapseContent arrayEquipments open`}>
						{content.map((equipement, index) => {
							return <span key={index}>{equipement}</span>;
						})}
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default CollapseArray;
