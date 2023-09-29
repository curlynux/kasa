import "../../assets/css/index/main.css";
import { useEffect, useState } from "react";

function Main() {
	const [data, setData] = useState();

	useEffect(() => {
		fetch("src/data/logements.json").then((response) => {
			response.json().then((data) => {
				setData(data);
				console.log(data);
			});
		});
	}, []);
	return (
		<main>
			{data.map((element, index) => {
				return (
					<>
						<section>
							<article id={element.id}>
								<img src={element.cover} alt="location" />
								<span>{element.title}</span>
							</article>
						</section>
						<section>
							<article id={element.id}>
								<img src={element.cover} alt="location" />
								<span>{element.title}</span>
							</article>
						</section>
					</>
				);
			})}
		</main>
	);
}

export default Main;
