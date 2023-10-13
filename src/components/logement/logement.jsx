import "../../assets/css/logement/aside.css";
import "../../assets/css/logement/tag.css";
import "../../assets/css/logement/dropdown.css";
import "../../assets/css/logement/logement.module.css";
import Header from "../header";
import Footer from "../footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../carrousel/carrousel";
import Dropdown from "./dropdown";
import "../../assets/css/responsive/logement.css";

function Logement() {
	const [data, setData] = useState();
	console.log(data);
	const params = useParams();
	const id = params.id;
	console.log(params);
	useEffect(() => {
		fetch("../src/data/logements.json").then((response) => {
			response.json().then((data) => {
				setData(data);
				console.log(data);
			});
		});
	}, []);
	return (
		<>
			<Header />
			<main>
				{data &&
					data.map((element, index) => {
						if (id === element.id) {
							console.log(element);
							return (
								<>
									<section>
										<Carrousel data={data} />
									</section>
									<aside>
										<h2>{element.title}</h2>
										<span id="location">{element.location}</span>
										<div id="tag">
											{element.tags.map((tag) => {
												return <span>{tag}</span>;
											})}
										</div>
									</aside>
									<div id="dropdown">
										<select name="description" id="description">
											<option value="equipements">{element.description}</option>
										</select>
										<Dropdown data={data} id={id} />
									</div>
								</>
							);
						}
					})}
			</main>
			<Footer />
		</>
	);
}

export default Logement;
