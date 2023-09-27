import "../assets/css/header.css";

function Header() {
	return (
		<header>
			<img id="logo" src="../header/LOGO.svg" alt="logo" />
			<nav>
				<ul>
					<li>Accueil</li>
					<li>A Propos</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
