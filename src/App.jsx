import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/index/footer";
import Main from "./components/index/main";

function App() {
	const [cover, setCover] = useState();
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [host, setHost] = useState();
	const [id, setId] = useState();
	const [location, setLocation] = useState();
	const [pictures, setPictures] = useState();
	const [rating, setRating] = useState();
	const [tags, setTags] = useState();

	fetch("src/data/logements.json").then((response) =>
		response.json().then((data) => {
			var i = 0;
			while (i <= data.length) {
				// console.log(data[i++]);
				setCover(data[i].cover);
				setDescription(data[i].description);
				setHost(data[i].host);
				setId(data[i].id);
				setLocation(data[i].location);
				setPictures(data[i].pictures);
				setRating(data[i].rating);
				setTags(data[i].tags);
				setTitle(data[i].title);
			}
		})
	);
	return (
		<div>
			<Header />
			<Main cover={cover} title={title} />
			<Footer />
		</div>
	);
}

export default App;
