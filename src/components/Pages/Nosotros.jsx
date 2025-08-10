import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

function Nosotros() {
  return (
    <div className="container-fluid">
      <Navbar />
      <img
        className="w-100 "
        src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/store2.png"
        alt=""
      />
      <div class="row d-flex  justify-content-center">
        <div className="my-5 col-12 w-50">
          <h3>¿Quiénes somos en Neocube?</h3>
          <p>
            En Neocube, creemos que la tecnología no solo conecta dispositivos,
            sino también personas. Somos una tienda de insumos informáticos con
            base en Buenos Aires, y desde hace tres años nos dedicamos a
            potenciar el mundo digital de nuestros clientes con productos
            confiables, asesoramiento honesto y atención personalizada.
          </p>

          <p>
            Fundada en 2022 por entusiastas del hardware y el desarrollo,
            Neocube nació con una misión clara: ofrecer soluciones informáticas
            accesibles, de calidad y pensadas para cada necesidad. Ya seas
            gamer, programador, estudiante o simplemente alguien que quiere
            mejorar su setup, en Neocube vas a encontrar lo que buscás.
          </p>
        </div>

        <div className="col-12 w-50 mx-5">
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
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Nosotros;
