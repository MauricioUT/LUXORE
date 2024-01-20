import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import BreadCrumbBanner from "./BreadCrumbBanner";
import  OurServices from "./our-services"
import Experts  from "./experts"
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
        <div  className="row">
          <OurServices/>
         </div>
         <div>
        <Experts/>
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
