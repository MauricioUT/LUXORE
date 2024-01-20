
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import MobileMenu from "../common/header/MobileMenu";
import BreadCrumbBanner from "../common/header/BreadCrumbBanner";
import Form from "./Form";
const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner clase="contact-header-img" 
      headerMsg="Contacto"
      subHeaderMsg="Déjanos tus datos y te asesoramos"/>
      {/* <!-- Our Contact --> */}
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-12">
              <div className="form_grid">
                <h4 className="mb5">Agenda una cita</h4>
                <p>
                Evita riesgos innecesarios,
                elige invertir en Bienes Raíces en México con una empresa confiable y transparente, 
                respaldada por asesores con más de 12 años de experiencia en el sector.
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
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