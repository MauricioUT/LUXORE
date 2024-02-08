import Image from "next/image";
import Link from "next/link";
const Creaator = () => {
  return (
    <div className="media ">
      <Image
        width={300}
        height={200}
        className="me-3"
        src="/assets/images/luxore/fondoContacto.jpg"
        alt="lc1.png"
      />
      <div className="media-body">
        <h4 className="mt-4">Luxore</h4>
        <h5 className="mt-0 mb1">Expertos en ventas de bienes raíces</h5>
        <div>
        <Link
          href="tel:5589883659"
          className="mt-4 mb-4"
        >
          <i className="fa fa-solid fa-phone"> 55 8988 3659</i>
         
        </Link>
        </div>
        <div>
          <a href="mailto:contacto@luxore.mx"> <i className="fa fa-solid fa-bookmark"> contacto@luxore.mx</i></a>
        </div>  

        <div>
          <a href="/contacto"> <i className="fa fa-solid fa-envelope" > Envíanos un e-mail</i></a>
        </div> 
      </div>
    </div>
  );
};

export default Creaator;
