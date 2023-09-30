import "../../assets/css/index/main.css";

function Main({ data }) {
	console.log(data);
	return (
		<main>
			<section>
				{data.map((element, index) => {
					return (
						<article>
							<img src={element.cover} alt="location" />
							<span></span>
						</article>
					);
				})}
			</section>
			<section>
				<article id="">
					<img src="" alt="location" />
					<span></span>
				</article>
			</section>
		</main>
	);
}

export default Main;
