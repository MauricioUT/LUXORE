const OurServices = ({ style = "" }) => {
    const whyCooseContent = [
      {
        id: 1,
        icon: "misionImg",
        title: "Verificamos que toda la documentación del inmueble esté en orden",
        descriptions: `Verificamos que toda la documentación del inmueble esté en orden`,
      },
      {
        id: 2,
        icon: "visionImg",
        title: "Visión",
        descriptions: `Maximizar los recursos para el crecimiento económico de las personas y asegurar un futuro confiable.`,
      },
    ];
  
    return (
      <>

          <div className="row" key={1}>
            <div className="col-md-12 col-lg-12 col-xl-12 text-center">
              <h2>Nuestros Servicios</h2>
              <h4>Adquiere inmuebles a precios competitivos en el mercado*.</h4>
            </div>
                {/* Contenedor 1 */}
                <div className="col-md-6 col-lg-4 col-xl-4"> 
                      {/* div 1 */}
                    <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                      <div className="icon">
                        <section className="realStateImg1"></section>
                      </div>
                      <div className="details">
                        <h4>Verificamos que toda la documentación del inmueble esté en orden</h4>
                      </div>
                    </div>

                    {/* div 4 */}
                    <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                      <div className="icon">
                        <section className="realStateImg3"></section>
                      </div>
                      <div className="details">
                        <h4>Te brindamos certeza fiscal y notarial</h4>
                      </div>
                    </div>

                </div>
                {/* Contenedor 2 */}
                <div  className="col-md-6 col-lg-4 col-xl-4"> 
                    {/* div gift */}
                    <div className={` col-md-12 col-lg-12 col-xl-12`}>
                      <div className="icon">
                        <section className="gif1"></section>
                      </div>
                    </div>

                </div>
                {/* Contenedor 3 */}
                <div  className="col-md-6 col-lg-4 col-xl-4">
                      {/* div 3 */}
                      <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                        <div className="icon">
                          <section className="realStateImg2"></section>
                        </div>
                        <div className="details">
                          <h4>Te ayudamos a elegir el inmueble más rentable para ti</h4>
                        </div>
                      </div>
                      {/* div 6 */}
                      <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                                    <div className="icon">
                                      <section className="realStateImg4"></section>
                                    </div>
                                    <div className="details">
                                      <h4>Te acompañamos en todo el proceso</h4>
                                    </div>
                                  </div>

                </div>
            <div className="text-center">
              <p>* Porcentaje promedio, cada operación es independiente y puede variar.</p>
            </div>
          </div>
      </>
    );
  };
  
  export default OurServices;
  