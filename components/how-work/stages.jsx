const Stages = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "icon-service-9",
      title: "Inversión",
      descriptions: `<p>Consulta con diferentes instituciones financieras los requisitos para otorgar un crédito, así como la tasa, comisiones por apertura, plazo y otras características de los productos que manejan.</p>
      <p>Obtén una preaprobación. Una vez que hayas decidido qué tipo de crédito y la institución financiera que te lo ofrece, asegúrate de que cumplas con los requisitos y obtengas la aprobación, 
      antes de comprometerte en la compraventa del inmueble de tu elección.</p>
      <p> En caso de contar con recursos propios, verifica la disponibilidad, antes de firmar un contrato y comprometerte con la compraventa.</p>`,
    },
    {
      id: 2,
      icon: "icon-service-7",
      title: "Selección",
      descriptions: `<p>Comienza con la búsqueda del inmueble que se ajuste a tus criterios, dentro de nuestro catálogo de LUXORE.</p>
      <p>Debes elegir la ubicación, monto de inversión y características como acabados, estado de mantenimiento y edad del inmueble.</p>
      <p>Toma en cuenta que adquirir una propiedad es una decisión patrimonial. Toma el tiempo necesario para investigar y considerar todas las opciones, antes de tomar una decisión.</p>`,
    },
    {
      id: 3,
      icon: "icon-service-6",
      title: "Visita",
      descriptions: `<p><strong>Conoce el inmueble:</strong> Programa una visita para conocerlo, evaluar su estado y determinar si será necesario invertir en mantenimiento o alguna reparación.</p>

      <p><strong>Avalúo:</strong> Un tasador profesional evaluará el inmueble para determinar su valor de mercado y verificar si tu inversión es segura.</p>
      
      <p>Considera la posibilidad de requerir de algún anticipo, en caso de querer reservar el inmueble.</p>`,
    },
    {
      id: 4,
      icon: "icon-service-8",
      title: "Compra",
      descriptions: `<p><strong>Negociación:</strong> Considera la conveniencia de hacer una oferta por una cifra menor y llegar a un acuerdo más conveniente para ti.</p>
      <p><strong>Verificación de documentos:</strong>Antes de firmar un contrato de compraventa, asesórate legalmente y asegúrate de que la documentación del inmueble se encuentre en regla.</p>
      <p><strong>Firma y pago:</strong> Si ya estás seguro de tu elección y la documentación en orden, fírmala y realiza el pago acordado a la firma del contrato.</p>`,
    },
    {
      id: 5,
      icon: "icon-service-5",
      title: "Titulación y entrega",
      descriptions: `<p><strong>Transferencia de la propiedad:</strong> El inmueble se transfiere a tu nombre por medio de una Escritura que emite un Notario certificado.</p>
      <p><strong> Toma de posesión:</strong> El inmueble se entrega y puedes tomar posesión de tu propiedad. ¡Felicidades!</p>`,
    }      
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className={ item.id == 4 || item.id == 5 ? 'col-md-6 col-lg-6 col-xl-6' : 'col-md-6 col-lg-4 col-xl-4'} key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <section className={item.icon}></section>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <div dangerouslySetInnerHTML={{__html: item.descriptions}}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Stages;
