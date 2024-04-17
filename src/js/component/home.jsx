import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./Card";
import NabVar from "./NavBar";
import Footer from "./Footer";
import { balones, madeIn } from "./data"




const Home = () => {
	return (
		<div>
			<NabVar />
			<div className="container">
				<div className="mt-4">
					<Jumbotron titulo="Hola! Soy el Jumbotron colega!!" texto="y yo soy el tipico texto lorem ipsum..." otrotexto=" wowwww!! Debajo tienes los balones de los mundiales de futbol, Qatar... bueno ese no cuenta, pero oye... Viva Argentina!!" jumbutton="Jumbutton"/>
				</div>
				<div className="d-flex row mt-4 mb-4">
					<Card title={balones[0].title} description={balones[0].description} cta={balones[0].cta} image={balones[0].image}/>
					<Card title={balones[1].title} description={balones[1].description} cta={balones[1].cta} image={balones[1].image}/>
					<Card title={balones[2].title} description={balones[2].description} cta={balones[2].cta} image={balones[2].image}/>
					<Card title={balones[3].title} description={balones[3].description} cta={balones[3].cta} image={balones[3].image}/>
					<Card title={balones[4].title} description={balones[4].description} cta={balones[4].cta} image={balones[4].image}/>

				</div>
		
				<div className="d-flex row mt-4 mb-4">
					{
						balones.map((item, index) =>(
							<Card key={index} title={item.title} description={item.description} cta={item.cta} image={item.image}/>

						))
					}

				</div>
			</div>
			<Footer madeIn={madeIn} />
		</div>

	);
};

export default Home;


// no consigo que las cartas queden en columnas responsive,solo con col-12... de otra manera pierden la forma, las imagenes cada una es de un tamaño, para hacerlas todas iguales debería establecer un height comun a la etiqueta img? añadi arriba la primera forma de establecer la card en el home y luego de la forma buena, con el mapeo. si me ayudais a resolver estas dudas os lo agradeceria. Muchas gracias!!//
