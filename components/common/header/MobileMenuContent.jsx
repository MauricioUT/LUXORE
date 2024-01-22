'use client'

import {
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
        name: "Single V4",
        routerPath: "/listing-details-v4",
      },
    ],
  },
];


const pages = [
  {
    name: "Faq",
    routerPath: "/faq",
  },
  {
    name: "404 Page",
    routerPath: "/404",
  },
  {
    name: "Terms & Conditions",
    routerPath: "/terms",
  },
];


const services = [
  { id: 1, name: "Agencia inmobiliaria", routerPath: "/agencia-inmobiliaria" },
    { id: 2, name: "Invierte en remates hipotecarios", routerPath: "/invierte-en-remates-hipotecarios" },
]

const realState = [
  { id: 1, name: "¿Qué son?", routerPath: "/que-son-los-bienes-raices" },
  { id: 2, name: "¿Cómo funcionan?", routerPath: "/como-funcionan" },
  { id: 3, name: "¿Qué tan seguros son?", routerPath: "/que-tan-seguros-son" },
  { id: 9, name: "Casos de éxito en la compra de bienes raíces", routerPath: "/404" },
  { id: 10, name: "Preguntas frecuentes", routerPath: "/faq" },
]





const MobileMenuContent = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
<>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            {/* <Image
              width={100}
              height={100}
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/logoDorado1.png"
              alt="header-logo.png"
            /> */}
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
    {/* <Sidebar> */}
    <div style={{maxHeight:'calc(100vh - 100px)', overflowY:'auto'}}>
        <Menu>
        <MenuItem>
            <div
            onClick={()=>router.push("/")}
             
              className={
                pathname === "/" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Inicio
            </div>
      
        </MenuItem>
        {/* fin inicio */}

        <MenuItem>
            <div
            onClick={()=>router.push("/quienes-somos")}
             
              className={
                pathname === "/quienes-somos" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Quienes somos
            </div>
        </MenuItem>
           {/* fin quienes somos */}
         
         <SubMenu
            label="Servicios"
            className={
              services.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {services.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End servicios */}

          <SubMenu
            label="Bienes raíces"
            className={
              realState.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {realState.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End bienes raíces */}

          <SubMenu
            label="Property"
            className={
              property.some((parent) => {
                return parent.items.some(
                  (page) =>
                    page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                    page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {property.map((item) => (
              <SubMenu
              label={item.title}
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                      page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                  )
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                      onClick={()=>router.push(val.routerPath)}
                      className={
                        pathname.split('/')[1] === val.routerPath?.split('/')[1]
                        // val.routerPath === pathname.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End properties */}

          <SubMenu
            label="Pages"
            className={
              pages.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={()=>router.push(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End pages Pages */}

          <MenuItem>
            <div
            onClick={()=>router.push("/contact")}
             
              className={
                pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Contacto
            </div>
          </MenuItem>
        </Menu>


        
        </div>
      {/* </Sidebar> */}
      </>  
  );
};

export default MobileMenuContent;
