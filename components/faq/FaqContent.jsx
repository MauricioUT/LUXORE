const FaqContent = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
            ¿Cuáles son los métodos de pago aceptados para comprar una propiedad en Luxore?
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Cheques certificados, transferencias bancarias y financiamiento a través de un préstamo hipotecario (FOVISSSTE/INFONAVIT).
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTwo">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            ¿Qué es un título de propiedad?
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse "
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Es el documento legal que demuestra la propiedad de una persona sobre una propiedad. Es importante porque garantiza que el vendedor tiene derecho a vender la propiedad y que está libre de gravámenes o reclamaciones legales. Antes de comprar una propiedad, se realiza una búsqueda de título para verificar su validez.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingThree">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              ¿Que es un crédito hipotecario pre-aprobado?
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Es una carta de un prestamista que indica que has sido pre-aprobado para un préstamo hipotecario en función de tu situación financiera y crédito. Puede ayudarte a determinar cuánto puedes gastar en una propiedad y demostrar a los vendedores que eres un comprador serio.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFour">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              ¿Que es el avalúo de un inmueble?
            </button>
          </div>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Es una evaluación realizada por un profesional independiente para determinar el valor de mercado de una propiedad. Los prestamistas hipotecarios requieren un avalúo para asegurarse de que el valor de la propiedad sea suficiente para respaldar el préstamo hipotecario.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFive">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
             ¿Por qué contratar los servicios de Luxore?
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Contamos con agentes inmobiliarios con más de 12 años de experiencia en el mercado. Además nuestro interés principal es la rapidez y claridad en el proceso de compra y venta de propiedad de tu elección.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSix">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
             ¿Puedo vender mi propiedad con Luxore?
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Claro, podemos agregar tu inmueble a nuestro catálogo, comunícate con nosotros para platicarte más del proceso.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSeven">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
             ¿Que es una escritura pública?
            </button>
          </div>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Es un documento legal que transfiere la propiedad de un vendedor a un comprador. Debe ser firmada y notariada para que sea legalmente válida.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingEight">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
            ¿Que es la plusvalía de un inmueble?
            </button>
          </div>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Se refiere al aumento en el valor de una propiedad con el tiempo. Es un indicador de la inversión exitosa en bienes raíces y puede generar ganancias cuando vendes la propiedad.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingNine">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
            ¿Qué es protección contra la inflación?
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Los bienes raíces mantener su valor con el tiempo y, a menudo, superan la inflación. Esto puede ayudar a proteger tu inversión de la pérdida de poder adquisitivo.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
             ¿Qué tengo que hacer para comenzar a invertir?
            </button>
          </div>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Lo primero que debes hacer hacer es llenar el formulario de contacto para agendar una cita.

Nuestros ejecutivos te explicaran el proceso y aclararan todas las dudas que tengas.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseeleven"
              aria-expanded="false"
              aria-controls="collapseeleven"
            >
           ¿Tengo el control sobre mi inversión?
            </button>
          </div>
          <div
            id="collapseeleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Sí, al invertir en bienes raíces directamente, tienes control total. Puedes tomar decisiones sobre la propiedad y su gestión.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
