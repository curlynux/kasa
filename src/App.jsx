import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/index/footer";
import Main from "./components/index/main";

function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;
