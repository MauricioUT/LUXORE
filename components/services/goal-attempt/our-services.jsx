const OurServices = ({ style = "" }) => {
    return (
      <>

          <div className="row" key={1}>
            <div className="col-md-12 col-lg-12 col-xl-12 text-center">
              <h2>Invierte en Remates Hipotecarios</h2>
              <h4>Diseñamos tu portafolio de propiedades a la medida</h4>
            </div>
                {/* Contenedor 1 */}
                <div className="col-md-6 col-lg-4 col-xl-4"> 
                      {/* div 1 */}
                    <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                      <div className="icon">
                        <section className="realStateImg1"></section>
                      </div>
                      <div className="details">
                        <h4>Con Luxore tu inversión es garantizada</h4>
                      </div>
                    </div>

                    {/* div 4 */}
                    <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                      <div className="icon">
                        <section className="realStateImg3"></section>
                      </div>
                      <div className="details">
                        <h4>Adquiere una propiedad hasta un 60% por debajo de su valor comercial</h4>
                      </div>
                    </div>

                </div>
                {/* Contenedor 2 */}
                <div  className="col-md-6 col-lg-4 col-xl-4"> 
                    {/* div gift */}
                    <div className={` col-md-12 col-lg-12 col-xl-12`} style={{height:'100%'}}>
                      <div className="icon" style={{height:'100%'}}>
                        <section className="gif1" ></section>
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
                          <h4>Certeza jurídica durante todo el proceso</h4>
                        </div>
                      </div>
                      {/* div 6 */}
                      <div className={`why_chose_us ${style} col-md-12 col-lg-12 col-xl-12`}>
                                    <div className="icon">
                                      <section className="realStateImg4"></section>
                                    </div>
                                    <div className="details">
                                      <h4>Contamos con un amplio inventario de inmuebles en toda la República</h4>
                                    </div>
                                  </div>

                </div>
          </div>
      </>
    );
  };
  
  export default OurServices;
  