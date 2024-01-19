import GlobalHeroFilter from "../common/GlobalHeroFilter";

const Hero = () => {
  return (
    // 
    <section className="home-three bg-img3 md-mt0 bg-anime">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="home3_home_content">
              <h1>Bienes raíces </h1>
              <h2>Tu inversión, nuestra especialidad.</h2>
              {/* <h4>
                From as low as $10 per day with limited time offer discounts
              </h4> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <GlobalHeroFilter className="home3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
