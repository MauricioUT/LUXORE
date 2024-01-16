
'use client'

import Link from "next/link";

import MyAccount from "./MyAccount";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HeaderMenuContent = ({ float = "" }) => {

  const pathname = usePathname()

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
    {
      id: 3,
      name: "Home 3",
      routerPath: "/home-3",
    },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },
        {
          name: "Grid v2",
          routerPath: "/listing-grid-v2",
        },
        {
          name: "Grid v3",
          routerPath: "/listing-grid-v3",
        },
        {
          name: "Grid v4",
          routerPath: "/listing-grid-v4",
        },
        {
          name: "Grid v5",
          routerPath: "/listing-grid-v5",
        },
        {
          name: "Grid v6",
          routerPath: "/listing-grid-v6",
        },
      ],
    },
    {
      id: 2,
      title: "Listing List",
      items: [
        {
          name: "List V1",
          routerPath: "/listing-list-v1",
        },
      ],
    },
    {
      id: 3,
      title: "Listing Style",
      items: [
        {
          name: "Parallax Style",
          routerPath: "/parallax-style",
        },
        {
          name: "Slider Style",
          routerPath: "/slider-style",
        },
        {
          name: "Map Header",
          routerPath: "/map-header",
        },
      ],
    },
    {
      id: 4,
      title: "Listing Half",
      items: [
        {
          name: "Map V1",
          routerPath: "/listing-map-v1",
        },
        {
          name: "Map V2",
          routerPath: "/listing-map-v2",
        },
        {
          name: "Map V3",
          routerPath: "/listing-map-v3",
        },
        {
          name: "Map V4",
          routerPath: "/listing-map-v4",
        },
      ],
    },
    {
      id: 5,
      title: "Agent View",
      items: [
        {
          name: "Agent V1",
          routerPath: "/agent-v1",
        },
        {
          name: "Agent V2",
          routerPath: "/agent-v2",
        },
        {
          name: "Agent Details",
          routerPath: "/agent-details",
        },
      ],
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
          name: "Single V2",
          routerPath: "/listing-details-v2",
        },
        {
          name: "Single V4",
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
    { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
    { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
    {
      id: 4,
      name: "Blog Details",
      routerPath: "/blog-details",
    },
  ];

  const pages = [
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
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
      <li className="dropitem">
        <a
          href="#"
          className={
            home.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}

        <ul className="sub-menu ">
          {home.map((item) => (
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
            listing.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Listing</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}
        <ul className="sub-menu ">
          {listing.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
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
          <span className="title">Property</span>{" "}
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

      <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] 
                  // item.routerPath + "/[id]" === pathname?.split('/')[1]
                    ? "ui-active"
                    : undefined
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
          Contact
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <Image
              width={45}
              height={45}
              className="rounded-circle"
              src="/assets/images/team/e1.png"
              alt="e1.png"
            />
            <span className="dn-1199 ms-1">Ali Tufan</span>
          </a>
          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </div>
      </li>
      {/* End ."user_setting */}
    </ul>
  );
};

export default HeaderMenuContent;
