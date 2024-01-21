'use client'

import GlobalFilter from "./GlobalFilter";
import {  addFeaturedId} from "../../features/properties/propertiesSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";




const GlobalHeroFilter = ({ className = "" }) => {

    const dispath = useDispatch();

    const [geteaturedId, setFeaturedId] = useState(1);


      // City
      useEffect(() => {
        dispath(addFeaturedId(geteaturedId));
      }, [dispath, geteaturedId]);

  return (
    <div className={`home_adv_srch_opt ${className}`}>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="venta-directa-tab"
            data-bs-toggle="pill"
            href="#venta-directa"
            role="tab"
            aria-controls="venta-directa"
            aria-selected="true"
            onClick={(e) => setFeaturedId(1)}
          >
            Venta 
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            id="rh-tab"
            data-bs-toggle="pill"
            href="#rh"
            role="tab"
            aria-controls="rh"
            aria-selected="false"
            onClick={(e) => setFeaturedId(2)}
          >
            Remate Hipotecario
          </a>
        </li>


        <li className="nav-item">
          <a
            className="nav-link"
            id="renta-tab"
            data-bs-toggle="pill"
            href="#renta"
            role="tab"
            aria-controls="renta"
            aria-selected="false"
            onClick={(e) => setFeaturedId(3)}
          >
            renta
          </a>
        </li>
      </ul>
      {/* End nav-pills */}

      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="venta-directa"
          role="tabpanel"
          aria-labelledby="venta-directa"
        >
          <GlobalFilter   testVar="Test" />
        </div>
        <div
          className="tab-pane fade"
          id="rh"
          role="tabpanel"
          aria-labelledby="rh"
        >
          <GlobalFilter />
        </div>
        <div
          className="tab-pane fade"
          id="renta"
          role="tabpanel"
          aria-labelledby="renta"
        >
          <GlobalFilter />
        </div>

      
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
