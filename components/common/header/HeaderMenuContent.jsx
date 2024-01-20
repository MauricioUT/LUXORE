'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  const home = [
    {
      id: 3,
      name: "Home 3",
      routerPath: "/home-3",
    },
  ];


  const property = [
    {
      id: 2,
      title: "Listing Single",
      items: [
        {
          name: "Single V1",
          routerPath: "/listing-details-v1",
        },
        {
          name: "Single V1",
          routerPath: "/listing-details-v1",
        },
      ],
    },
  
  ];


  const services = [
    { id: 1, name: "Agencia inmobiliaria", routerPath: "/real-state" },
    { id: 2, name: "Invierte en remates hipotecarios", routerPath: "/goal-attempt" },
  ]

  const realState = [
    { id: 1, name: "¿Qué son", routerPath: "/temp2" },
    { id: 3, name: "¿Cómo funcionan?", routerPath: "/como-funcionan" },
    { id: 4, name: "¿Qué tan seguros son?", routerPath: "/que-tan-seguros-son" },
    { id: 9, name: "Casos de éxito en la compra de bienes raíces", routerPath: "/404" },
    { id: 10, name: "Preguntas frecuentes", routerPath: "/faq" },
  ]


  const pages = [
    { id: 1, name: "About Us", routerPath: "/temp3" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ];

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
          href="/about-us"
          className={pathname === "/about-us" ? "ui-active" : undefined}
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

      <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                  // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">property</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                      // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      href={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1] 
                        // val.routerPath + "/[id]" === pathname?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
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
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contacto
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="tel:5589883659"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          <i className="fa fa-solid fa-phone"> 55 8988 3659</i>
         
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenuContent;
