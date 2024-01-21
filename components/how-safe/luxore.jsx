import Image from "next/image";

const Steps = () => {


  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-xl-5">
          <div className="about_thumb">
            <Image
              width={461}
              height={600}
              priority
              className="img-fluid w100 cover"
              src="/assets/images/luxore/bussinesman-smile-img.webp"
              alt="1.jpg"
            />
          </div>
        </div>
        <div className="col-lg-8 col-xl-7">
          <div className="how-safe-content">
            <h3>No te arriesgues, acércate con los expertos</h3>
            <p >
              El éxito de la inversión en bienes raíces depende de tu capacidad para tomar
              decisiones informadas y de tu disposición a asumir las responsabilidades
              asociadas con este tipo de inversiones.
            </p>
            <p>
              Por ello en Luxore estamos comprometidos a brindarte las mejores opciones para ti y tus inversiones.
              Nuestro equipo experto en inversiones inmobiliarias, ya sea para que ganes o ahorres capital, tú decides.
            </p>
          </div>
        </div>
      </div>
      {/* End .col */}
      <div className="row">
        <div className="col-lg-8 col-xl-7">
          <div className="how-safe-content-two">
            <h3>Cuida tu patrimonio, tu inversión y tu tranquilidad</h3>
            <p >
              Luxore cuenta con todos los estándares que debes buscar al momento de invertir en bienes y raíces:
            </p>
            <p>
              1. Acta constitutiva y oficinas físicas.
            </p>
            <p>
              2. Amplia cartera de propiedades.
            </p>
            <p>
              3. Transparencia en cada uno de nuestros procesos.
            </p>
            <p>
              4. Acompañamiento personalizado.
            </p>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Steps;
