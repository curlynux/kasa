import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import "../../assets/css/logement/arrow.css";

function Carrousel({ data }) {
	console.log("CARROUSEL", data);
	const [isPlaying, setIsPlaying] = useState(false);
	const [current, setCurrent] = useState(0);
	const params = useParams();
	const id = params.id;
	function previousPhoto() {
		setIsPlaying(true);
		setCurrent((prevCurrent) =>
			prevCurrent === 0 ? data.length - 1 : prevCurrent - 1
		);
	}

	function nextPhoto() {
		setIsPlaying(true);
		setCurrent((prevCurrent) =>
			prevCurrent === data.length - 1 ? 0 : prevCurrent + 1
		);
	}
	return (
		<>
			{data &&
				data.map((element, index) => {
					if (id === element.id) {
						return (
							<div className="carrousel">
								<img
									src={element.pictures[current]}
									alt={`cover:${element.id}`}
									className={isPlaying ? "anime" : ""}
								/>
								<div
									style={{
										position: "absolute",
									}}
									id="arrow"
								>
									<FontAwesomeIcon
										icon={faChevronLeft}
										onClick={previousPhoto}
									/>
									<FontAwesomeIcon icon={faChevronRight} onClick={nextPhoto} />
								</div>
							</div>
						);
					}
				})}
		</>
	);
}

export default Carrousel;
