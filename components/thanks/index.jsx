
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MobileMenu from "../common/header/MobileMenu";
import GlobalHeroFilter from "../common/GlobalHeroFilter";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
     
      <section className="home-three contact-header-img md-mt0 bg-anime">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="home3_home_content">
              <h1>¡Gracias por visitarnos!</h1>
              <h2>En breve uno de nuestros asesores se pondrá en contacto contigo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
             {/* <!-- acá colocar texto adicional en uyn box como el index y el boton de inicio falta definir que va --> */}
          </div>
        </div>
      </div>
    </section>


      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default index;