'use client'

import "photoswipe/dist/photoswipe.css";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import DetailsContent from "@/components/listing-details-v1/DetailsContent";
import Sidebar from "@/components/listing-details-v1/Sidebar";
import ListingOne from "@/components/listing-single/ListingOne";
import { useState, useEffect } from "react";


const ListingDynamicDetailsV1 = ({params}) => {
 
  const id = params.id;
  const [getProperty, setProperty]=  useState([]);

  useEffect(() => {
    // Cargar datos al renderizar
    (async () => {
      const response = await fetch('/api/properties/'+id, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log("detalle property")
      const data = await response.json()
      setProperty(data);
    })();
  }, []);

  return (
    // condición para pintar el detalle solo cuando se tenga valores.
    getProperty.id &&  <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Listing Single Property --> */}
      <ListingOne property={getProperty} />
    

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent property={getProperty} />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section id="footeDetail" className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

    </>
  );
};

export default ListingDynamicDetailsV1;
