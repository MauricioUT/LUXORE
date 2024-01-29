'use client'

import GlobalFilter from "./GlobalFilter";
import {  addFeaturedId} from "../../features/properties/propertiesSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";





const GlobalHeroFilter = ({ className = "" }) => {

    const dispath = useDispatch();

    const [geteaturedId, setFeaturedId] = useState(1);
    const [getCategories, setCategories]=  useState([]);

      // City
      useEffect(() => {
        dispath(addFeaturedId(geteaturedId));
      }, [dispath, geteaturedId]);


      useEffect(() => {
        // Cargar datos al renderizar
        (async () => {
          const response = await fetch('/api/catalogos/C_CATEGORIES', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
          console.log("entre a C_CATEGORIES")
          const data = await response.json()
          setCategories(data);
        })();
      }, []);

  return (
    <div className={`home_adv_srch_opt ${className}`}>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
          {getCategories.map((item) => (
                  <li className="nav-item">
                  <a
                    className={`${["nav-link"]} ${[item.tag == 'venta-directa' ? "active":'']}`}
                    id={item.tag+"-tab"}
                    data-bs-toggle="pill"
                    href={"#"+item.tag}
                    role="tab"
                    aria-controls={item.tag}
                    aria-selected="true"
                    onClick={(e) => setFeaturedId(item.id)}
                  >
                    {item.category} 
                  </a>
                </li>
            ))
            }
      </ul>
      {/* End nav-pills */}


      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="venta-directa"
          role="tabpanel"
          aria-labelledby="venta-directa"
        >
          <GlobalFilter   testVar="1" />
        </div>
        <div
          className="tab-pane fade"
          id="rh"
          role="tabpanel"
          aria-labelledby="rh"
        >
          <GlobalFilter   testVar="2" />
        </div>
        <div
          className="tab-pane fade"
          id="renta"
          role="tabpanel"
          aria-labelledby="renta"
        >
          <GlobalFilter    testVar="3"/>
        </div>

      
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
