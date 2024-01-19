'use client'

// import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar
} from "react-pro-sidebar";
import Link from "next/link";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const home = [
  {
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
        name: "Single V4",
        routerPath: "/listing-details-v4",
      },
    ],
  },
];


const pages = [
  {
    name: "About Us",
    routerPath: "/about-us",
  },
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
          {/* End Pages Property */}

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
              Contact
            </div>
          </MenuItem>
        </Menu>


        
        </div>
      {/* </Sidebar> */}
      </>  
  );
};

export default MobileMenuContent;
