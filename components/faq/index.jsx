import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MobileMenu from "../common/header/MobileMenu";
import BreadCrumbBanner from "../common/header/BreadCrumbBanner";
import FaqContent from "./FaqContent";

const index = () => {
  return (
    <>
   {/* <!-- Main Header Nav --> */}
   <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner clase="backGroudFaq" 
      headerMsg="Preguntas Frecuentes"
      subHeaderMsg=""/>
      {/* <!-- About Text Content --> */}

      {/* <!-- Our FAQ --> */}
      <section className="our-faq bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">Listado de preguntas</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="faq_content">
                <div className="faq_according">
                  <FaqContent />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
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
