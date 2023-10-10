import { useState } from "react";

function Dropdown({ data, id }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="dropdown">
			<ul>
				{data.map((element, index) => {
					element.equipments.map((elem, indexx) => {
						return <li key={indexx}>{elem} TEXT</li>;
					});
				})}
			</ul>
		</div>
	);
}

export default Dropdown;
