const Stages = ({ style = "" }) => {
    const whyCooseContent = [
      {
        id: 1,
        icon: "icon-service-9",
        title: "Inversión",
        descriptions: `Ampliar tus posibilidades de inversión a través de la compra y venta de bienes y raíces.`,
      },
      {
        id: 2,
        icon: "icon-service-7",
        title: "Selección",
        descriptions: `Maximizar los recursos para el crecimiento económico de las personas y asegurar un futuro confiable.`,
      },
      {
        id: 3,
        icon: "icon-service-6",
        title: "Visita",
        descriptions: `Maximizar los recursos para el crecimiento económico de las personas y asegurar un futuro confiable.`,
      },
      {
        id: 4,
        icon: "icon-service-8",
        title: "Compra",
        descriptions: `Maximizar los recursos para el crecimiento económico de las personas y asegurar un futuro confiable.`,
      },
      {
        id: 5,
        icon: "icon-service-5",
        title: "Titulación y entrega",
        descriptions: `Maximizar los recursos para el crecimiento económico de las personas y asegurar un futuro confiable.`,
      }      
    ];
  
    return (
      <>
        {whyCooseContent.map((item) => (
          <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
            <div className={`why_chose_us ${style}`}>
              <div className="icon">
                <section className={item.icon}></section>
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
  
  export default Stages;
  