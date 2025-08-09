import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

function Nosotros() {
  return (
    <div>
      <Navbar />

      <div class="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <h1>¿Quiénes somos en Neocube?</h1>
            <p>
              En Neocube, creemos que la tecnología no solo conecta
              dispositivos, sino también personas. Somos una tienda de insumos
              informáticos con base en Buenos Aires, y desde hace tres años nos
              dedicamos a potenciar el mundo digital de nuestros clientes con
              productos confiables, asesoramiento honesto y atención
              personalizada.
            </p>

            <p>
              Fundada en 2022 por entusiastas del hardware y el desarrollo,
              Neocube nació con una misión clara: ofrecer soluciones
              informáticas accesibles, de calidad y pensadas para cada
              necesidad. Ya seas gamer, programador, estudiante o simplemente
              alguien que quiere mejorar su setup, en Neocube vas a encontrar lo
              que buscás.
            </p>
          </div>
          <img
            className="col-6"
            src="src/assets/store.png"
            height="500px"
            alt=""
          />
        </div>
        <div>
          <h2>Nuestro catálogo incluye:</h2>
          <ul>
            <li>Componentes y periféricos de última generación</li>
            <li>Accesorios para PC, notebooks y redes</li>
            <li>Insumos para mantenimiento y armado</li>
            <li>Asesoramiento técnico para compras inteligentes</li>
          </ul>

          <p>
            Estamos en el corazón de Buenos Aires, pero nuestra comunidad va
            mucho más allá. A lo largo de estos tres años, hemos crecido gracias
            a la confianza de quienes nos eligen día a día, y seguimos apostando
            por la innovación, el compromiso y el trato humano.
          </p>

          <p>
            <strong>
              Neocube no es solo una tienda: es tu aliado tecnológico.
            </strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Nosotros;
