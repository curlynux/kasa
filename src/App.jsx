import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/index/main";

function App() {
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
		<>
			<Header />
			<Main data={data} />
			<Footer />
		</>
	);
}

export default App;
