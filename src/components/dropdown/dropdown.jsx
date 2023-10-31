import "../../assets/css/dropdown/dropdown.css";
import { useState } from "react";
import arrow from "../../assets/Arrow.png";

function Dropdown({ title, content }) {
	const [isOpen, setOpen] = useState(false);

	function toggleCollapse() {
		setOpen((prev) => !prev);
	}

	return (
		<div className="dropdown">
			<div className="header" onClick={toggleCollapse}>
				<h3>{title}</h3>
				<img
					className={`arrow ${isOpen === false ? "arrow_up" : "arrow_down"}`}
					src={arrow}
					alt="show content"
				/>
			</div>
			{isOpen && (
				<div className="content">
					{Array.isArray(content) ? (
						content.map((element, index) => {
							return (
								<div key={index} className="content-item">
									<p>{element}</p>
								</div>
							);
						})
					) : (
						<div className="content-item">
							<p>{content}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
