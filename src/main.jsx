import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logement from "./components/logement/logement.jsx";
import Error from "./components/error/error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path={"/"} element={<App />} />
				<Route path={"/logement/:id"} element={<Logement />} />
				<Route path={"/*"} element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
