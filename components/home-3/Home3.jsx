import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import GlobalHeroFilter from "../common/GlobalHeroFilter";
import PopupVideo from "../common/PopupVideo";
import FeaturedProperties from "./FeaturedProperties";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";

const Home3 = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property mt80 pb50">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title mb40">
              <h2>Featured Properties</h2>
              <p>
                Handpicked properties by our team.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15">
              <FeaturedProperties />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home3">
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home3 pt30 pb30">
        <div className="container-fluid">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Home3;
