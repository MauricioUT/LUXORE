const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 3,
      icon: "flaticon-high-five",
      title: "ASESORAMIENTO",
      descriptions: `Informamos con claridad a nuestros inversionistas todos los detalles del proceso de adquisición de Bienes Inmuebles en México.`,
    },
    {
      id: 4,
      icon: "flaticon-home-1",
      title: "INTEGRIDAD",
      descriptions: `Pensamos, decidimos y actuamos para cuidar los intereses de nuestros clientes.`,
    },
    {
      id: 5,
      icon: "flaticon-profit",
      title: "COMPROMISO",
      descriptions: `Acompañamos a nuestros clientes en cada etapa del proceso, su éxito, es nuestro éxito.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
