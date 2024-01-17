import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
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
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">User’s Guide</Link>
            </li>
            <li>
              <Link href="/">Support Center</Link>
            </li>
            <li>
              <Link href="/">Press Info</Link>
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
    </>
  );
};

export default Footer;
