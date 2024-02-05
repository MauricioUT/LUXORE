import Link from "next/link";
import Social from "./Social";
import Image from "next/image";

const Footer = () => {
  return (
    <>
     <div className="container-fluid p0 container-logo-footer">
     <Image
            width={100}
            height={100}
            className="logo-footer"
            src="/assets/images/luxore/logoFooter1.png"
            alt="header-logo2.png"
          />
     </div>
    

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Nuestras Oficinas</h4>
          <p>
          Anillo Perif. 2165, Los Alpes, Álvaro Obregón, 01010 Ciudad de México, CDMX
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Acerca de las Inversiones Inmobiliarias</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Quienes somos</Link>
            </li>
            <li>
              <Link href="/">Servicios</Link>
            </li>
            <li>
              <Link href="/">Bienes Raices</Link>
            </li>
            <li>
              <Link href="/">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contacto</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:contacto@luxore.mx">contacto@luxore.mx</a>
            </li>
            <li>
              <a href="tel:55 8988 3659">55 8988 3659</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
        </div>
      </div>

        {/* whatsApp section */}
  <a href="https://api.whatsapp.com/send?phone=5573610578&text=Hola!%20Quiero%20contratar%20sus%20servicios!" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>

    </>
  );
};

export default Footer;
