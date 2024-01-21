import Image from "next/image";

const Luxore = () => {


  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-xl-5">
          <div className="about_thumb" style={{height:'100%'}}>
            <Image style={{height:'100%'}}
              width={461}
              height={600}
              priority
              className="img-fluid w100 cover"
              src="/assets/images/luxore/coffe-couple.webp"
              alt="1.jpg"
            />
          </div>
        </div>
        <div className="col-lg-8 col-xl-7">
          <div className="what-are-content">
            <h3>Bienes raíces</h3>
            <p >
              Hacen referencia a los activos físicos que incluyen la tierra y cualquier <strong>estructura</strong> o edificación que se encuentre en ella.
              Estas propiedades están vinculadas al suelo y no se pueden mover de un lugar a otro.
            </p>
            <h4>Las propiedades inmobiliarias pueden clasificarse en varios tipos:</h4>
            <p>
              1.<strong> Residenciales:</strong> Hogares, apartamentos, casas, etc.
            </p>
            <p>
              2.<strong> Comerciales:</strong> Edificios destinados para actividades comerciales, como oficinas, tiendas, hoteles, etc.
            </p>
            <p>
              3.<strong> Industriales:</strong> Espacios para actividades de manufactura, almacenamiento y distribución.
            </p>
            <p>
              4.<strong> Terrenos:</strong> Parcelas de tierra sin edificar, listas para su desarrollo.
            </p>
            <p>
              5.<strong> Agrícolas:</strong> Terrenos destinados a la agricultura y producción de alimentos.
            </p>
          </div>
        </div>
      </div>
      {/* End .col */}
      <div className="row">
        <div className="col-lg-8 col-xl-7">
          <div className="what-are-content">
            <h3>Beneficios para inversores</h3>
            <p>
              1. <strong>Potencial de apreciación del capital:</strong> A lo largo del tiempo, los bienes inmuebles tienden a aumentar de valor. Esta apreciación puede generar ganancias a largo plazo.
            </p>
            <p>
              2. <strong>Flujo de efectivo:</strong> Si decides alquilar la propiedad, puedes obtener ingresos regulares en forma de alquiler.
            </p>
            <p>
              3. <strong>Inflación y protección del valor:</strong> Los bienes raíces a menudo actúan como una protección contra la inflación, ya que los precios de las propiedades tienden a aumentar con la inflación.
            </p>
            <p>
              4. <strong>Herencia y legado:</strong> Los bienes raíces se pueden mantener y transmitir a futuras generaciones, formando parte de tu patrimonio familiar.
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
              src="/assets/images/luxore/meeting-work.webp"
              alt="1.jpg"
            />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="row">
        <div className="col-lg-4 col-xl-5">
          <div className="about_thumb">
            <Image
              width={461}
              height={600}
              priority
              className="img-fluid w100 cover"
              src="/assets/images/luxore/giveme-keys.webp"
              alt="1.jpg"
            />
          </div>
        </div>
        <div className="col-lg-8 col-xl-7">
          <div className="what-are-content">
            <h3>¿Cuáles son las etapas de compra de un inmueble?</h3>
            <p>
              1. Búsqueda y Selección
            </p>
            <p>
              2. Negociación y Oferta
            </p>
            <p>
              3. Inspección y Evaluación
            </p>
            <p>
              4. Financiamiento o Capitalización
            </p>
            <p>
              5. Cierre de Compra
            </p>
            <p>
              Es fundamental contar con la asesoría de un agente inmobiliario y, en muchos casos, un abogado especializado en transacciones inmobiliarias para guiar y facilitar estos procesos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Luxore;
