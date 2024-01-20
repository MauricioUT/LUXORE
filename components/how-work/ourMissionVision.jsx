const OurMissionVission = ({ style = "" }) => {
    const whyCooseContent = [
      {
        id: 1,
        icon: "misionImg",
        title: "Misión",
        descriptions: `Ampliar tus posibilidades de inversión a través de la compra y venta de bienes y raíces.`,
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
        {whyCooseContent.map((item) => (
          <div className="col-md-6 col-lg-4 col-xl-6" key={item.id}>
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
  
  export default OurMissionVission;
  