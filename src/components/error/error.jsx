import "../../assets/css/error/error.css";
import Header from "../header";
import Footer from "../footer";
function Error() {
	return (
		<>
			<Header />
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Footer />
		</>
	);
}

export default Error;
