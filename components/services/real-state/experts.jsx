const Experts = ({ style = "" }) => {
    return (
      <>

          <div className="row" key={1}>
            <div className="col-md-12 col-lg-12 col-xl-12 text-center">
              <h2>Somos expertos en Compra y Venta de Inmuebles</h2>
              <h4>Hacemos que tu inversión rinda mucho más.</h4>
            </div>
                {/* Contenedor 1 */}
                <div className="col-md-6 col-lg-4 col-xl-4"> 
                      {/* div 1 */}
                    <div className={` ${style} col-md-12 col-lg-12 col-xl-12`}>
                      <div className="icon">
                        <section className="expertsImg1"></section>
                      </div>
                      <div className="details text-center mt30">
                        <h4>Respaldo bancario</h4>
                        <p>Te asesoramos para la elección de la institución bancaria que podría facilitarte la adquisición del inmueble</p>
                      </div>
                    </div>
                </div>
                {/* Contenedor 2 */}
                <div  className="col-md-6 col-lg-4 col-xl-4"> 
                    {/* div 3 */}
                    <div className={` ${style} col-md-12 col-lg-12 col-xl-12`}>
                        <div className="icon">
                          <section className="expertsImg2"></section>
                        </div>
                        <div className="details  text-center mt30 p15">
                          <h4>Invierte de forma segura</h4>
                          <p>Transparencia en el proceso, recibirás asesoría personalizada de nuestros especialistas, quienes te darán certeza jurídica para realizar la operación.</p>
                        </div>
                      </div>

                </div>
                {/* Contenedor 3 */}
                <div  className="col-md-6 col-lg-4 col-xl-4">
                      {/* div 3 */}
                      <div className={` ${style} col-md-12 col-lg-12 col-xl-12`}>
                        <div className="icon">
                          <section className="expertsImg3"></section>
                        </div>
                        <div className="details text-center mt30">
                          <h4>Disfruta de tu inmueble</h4>
                          <p>Con Luxore tu patrimonio es una realidad, la garantía de nuestros servicios es la entera satisfacción de nuestros clientes. </p>
                        </div>
                      </div>
                </div>
          </div>
      </>
    );
  };
  
  export default Experts;
  