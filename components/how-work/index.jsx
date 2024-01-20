import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MobileMenu from "../common/header/MobileMenu";
import BreadCrumbBanner from "../common/header/BreadCrumbBanner";
import Stages from "./stages";
import Steps from "./steps"

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner clase="how-work-header-img"
        headerMsg="¿Cómo funciona la compra y venta de bienes raíces?"
      />
      {/* <!-- Our Contact --> */}

      {/* <!-- how do they work --> */}
      <section className="how-work-section">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Bienes Raíces- ¿Cómo Funcionan?</h2>
          </div>
          <div className="row">
            <Steps />
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-7 offset-lg-3">
              <div className="main-title text-center">
                <h4>La compraventa de una propiedad se realiza en 5 etapas, aquí te orientamos para que estés en todo momento seguro del proceso:</h4>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Stages />
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
