'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  const services = [
    { id: 1, name: "Agencia inmobiliaria", routerPath: "/agencia-inmobiliaria" },
    { id: 2, name: "Invierte en remates hipotecarios", routerPath: "/invierte-en-remates-hipotecarios" },
  ]

  const realState = [
    { id: 1, name: "¿Qué son?", routerPath: "/que-son-los-bienes-raices" },
    { id: 2, name: "¿Cómo funcionan?", routerPath: "/como-funcionan" },
    { id: 3, name: "¿Qué tan seguros son?", routerPath: "/que-tan-seguros-son" },
    { id: 4, name: "Preguntas frecuentes", routerPath: "/preguntas-frecuentes" },
  ]

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="last">
        <Link
          href="/"
          className={pathname === "/" ? "ui-active" : undefined}
        >
          Inicio
        </Link>
      </li>
    {/* End .Inicio */}

      <li className="last">
        <Link
          href="/quienes-somos"
          className={pathname === "/quienes-somos" ? "ui-active" : undefined}
        >
          Quienes somos
        </Link>
      </li>
      {/* End Quienes somos */}

      <li className="dropitem">
        <a
          href="#"
          className={
            services.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Servicios</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {services.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End servicios */}

      
      <li className="dropitem">
        <a
          href="#"
          className={
            realState.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Bienes raíces</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {realState.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/contacto"
          className={pathname === "/contacto" ? "ui-active" : undefined}
        >
          Contacto
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="tel:5589883659"
        >
          <i className="fa fa-solid fa-phone"> 55 8988 3659</i>
         
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenuContent;
