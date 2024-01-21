import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MobileMenu from "../common/header/MobileMenu";
import BreadCrumbBanner from "../common/header/BreadCrumbBanner";
import Luxore from "./luxore"

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner clase="how-safe-header-img"
        headerMsg="¿Qué tan seguros son los bienes raíces?"
      />
      {/* <!-- Our Contact --> */}

      {/* <!-- how do they safe --> */}
      <section className="how-safe-section">
        <div className="container">
          <div className="row">
            <Luxore />     
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
