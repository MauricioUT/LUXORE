import Image from "next/image";

const OurHistory = () => {


  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
       
        <h3>Nuestro historia</h3>
          <p >
          Somos tres fundadores, tenemos una visión clara: convertirnos en un punto relevante en el sector inmobiliario, brindando seguridad y eficiencia a cada cliente. Desde el primer día, nuestro objetivo principal ha sido ayudar a las personas a encontrar oportunidades en el mercado de las bienes raíces a través de estrategias innovadoras y nuevas formas de inversión.
          Comprendimos que el proceso de compra, venta y regularización de propiedades en venta tradicional y remates hipotecarios
          es complejo y requiere un enfoque especializado.
          </p>
          <h3>Nuestro Compromiso</h3>
          <p>
          Somos un grupo regido por el compromiso con nuestros clientes y con la sociedad en general, guiado por los principios y valores de la empresa (responsabilidad, integridad, calidad, comunicación, cooperación y honestidad) aportando siempre un valor agregado en nuestros servicios, proporcionando al cliente oportunidades para su futuro.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={600}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/luxore/ourhistory.jpg"
            alt="1.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default OurHistory;
