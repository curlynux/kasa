import "./banner.css";

function Banner({ image, text }) {
	return (
		<div id="banner">
			<p>{text}</p>
			<img src={image} alt="banner" />
		</div>
	);
}

export default Banner;
