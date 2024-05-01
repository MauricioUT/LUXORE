import GlobalHeroFilter from "../common/GlobalHeroFilter";

const Hero = ({ urlCategory = "" }) => {
  return (
    // 
    <section className="home-three bg-img3 md-mt0 bg-anime">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="home3_home_content">
              <h1>Bienes raíces </h1>
              <h2>Tu inversión, nuestra especialidad.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <GlobalHeroFilter className="home3" urlCategory= {urlCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
