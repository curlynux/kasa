import { Link } from "react-router-dom";
import "../../assets/css/responsive/home.css";

import "../../assets/css/index/main.module.css";
function Main({ data }) {
	if (!Array.isArray(data)) {
		return <strong>LOADING...</strong>;
	}
	console.log(data);
	const shuffledData = [...data];
	for (let i = shuffledData.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
	}

	const firstSectionData = shuffledData.slice(
		0,
		Math.ceil(shuffledData.length / 2)
	);
	const secondSectionData = shuffledData.slice(
		Math.ceil(shuffledData.length / 2)
	);

	return (
		<main>
			<section>
				{firstSectionData &&
					firstSectionData.map((element, index) => {
						return (
							<article key={index}>
								<Link to={`/logement/${element.id}`}>
									<img src={element.cover} alt="location" />
									<span>{element.title}</span>
								</Link>
							</article>
						);
					})}
			</section>
			<section>
				{secondSectionData &&
					secondSectionData.map((element, index) => {
						return (
							<article key={index}>
								<Link to={`/logement/${element.id}`}>
									<img src={element.cover} alt="location" />
									<span>{element.title}</span>
								</Link>
							</article>
						);
					})}
			</section>
		</main>
	);
}

export default Main;
