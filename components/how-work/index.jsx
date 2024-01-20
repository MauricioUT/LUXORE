import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../common/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
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
      <BreadCrumbBanner />

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
      

      {/* <!-- Our Team --> */}
      <section className="our-team bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      <section className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2>Testimonials</h2>
                <p>Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial />
              </div>
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
