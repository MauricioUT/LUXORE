'use client'

import {
  addPrice,
  addStatus,
  resetAmenities,
  addBathrooms,
  addBedrooms,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const GlobalFilter = ({ className = "" }) => {
  const router = useRouter()

  const {
    status,
    bathrooms,
    bedrooms,
    } = useSelector((state) => state.properties);

  // input state
  const [getStatus, setStatus] = useState(status);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);

  const dispath = useDispatch();

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, getStatus]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, getBedroom]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setStatus("");
    setBathroom("");
    setBedroom("");
    dispath(addPrice({ min: 10000, max: 20000 }));
    dispath(resetAmenities());
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                onChange={(e) => setStatus(e.target.value)}
                className="selectpicker w100 show-tick form-select"
                value={getStatus}
              >          
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select"
              onChange={(e) => setBedroom(e.target.value)}
              value={getBedroom}>
              <option>Bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => setBathroom(e.target.value)} value={getBathroom}>
              <option value="">Bathrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Price</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={clearHandler}
              type="button"
              className="btn btn-thm"
            >
              Clear Filters
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
