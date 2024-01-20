import Image from "next/image";

const Steps = () => {


  return (
    <>

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={600}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/luxore/women-hurt-how-work.webp"
            alt="1.jpg"
          />
        </div>
      </div>
      <div className="col-lg-8 col-xl-7">
        <div className="how-work-content">

          <h4>Para realizar la compra de una casa, debes asegurarte de contar con lo siguiente para saber cómo funciona y si es posible que lo realices.</h4>
          <h4>Te recomendamos que te asegures de contar con:</h4>

          <p >
            1. Asesoría Profesional y Legal en todo el proceso.
          </p>
          <p>
            2. Los recursos necesarios, ya sea crédito hipotecario, recursos propios, Infonavit, Fovissste o cualquier tipo de financiamiento.
          </p>
          <p>
            3. Documentación del inmueble en orden.
          </p>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default Steps;
