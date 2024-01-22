import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MobileMenu from "../common/header/MobileMenu";
import BreadCrumbBanner from "../common/header/BreadCrumbBanner";
import WhyChoose from "../common/WhyChoose";
import OurMissionVission from "./ourMissionVision";
import OurHistory from "./ourHistory"

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner clase="backGroudAboutUs" 
      headerMsg="Acerca de nosotros"
      subHeaderMsg="En Luxore estamos de tu lado cuidando siempre de tus intereses"/>

      {/* <!-- About Text Content --> */}
 
 {/* <!-- History --> */}
 <section className="about-section">
        <div className="container">
          <div className="row">
            <OurHistory />
          </div>
          {/* End .row */}

          <div className="row ">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>¿Por qué nosotros?</h2>
                <p>Brindamos un servicio completo en cada paso.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

         <div  className="row">
          <OurMissionVission/>
         </div>
          <div className="row">
            <WhyChoose />
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
