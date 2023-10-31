import "../assets/css/header.module.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<img id="logo" src="../header/LOGO.svg" alt="logo" />
			<nav>
				<ul>
					<Link to={"/"}>
						<li>Accueil</li>
					</Link>
					<Link to={"/about"}>
						<li>A Propos</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
