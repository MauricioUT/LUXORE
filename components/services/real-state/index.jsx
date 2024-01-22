import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import MobileMenu from "../../common/header/MobileMenu";
import BreadCrumbBanner from "../../common/header/BreadCrumbBanner";
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
      <BreadCrumbBanner clase="backRealState" 
      headerMsg="LUXORE te brinda la solución a tus necesidades y maximisa tu inversión"
      subHeaderMsg=""/>
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
