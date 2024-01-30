'use client'

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
  toggleGridAndList
} from "../../../features/filter/filterSlice";

const FilterTopBar = () => {
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);

  const [getFeatured, setFeatured] = useState(featured);
  const { isGridOrList } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, getStatus]);

  // add featured
  useEffect(() => {
    dispatch(addFeatured(getFeatured));
  }, [dispatch, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    featured === "" && setFeatured("");
  }, [statusType, setStatus, featured, setFeatured]);

  return (
    <>
      <div className="col-sm-12 col-md-2 col-lg-4 col-xl-4">
        <div className="left_area tac-xsd">
          <p>
            <span className={length === 0 ? "text-danger" : undefined}>
              {length}{" "}
            </span>
            {length !== 0 ? (
              "Resultado(s)"
            ) : (
              <span className="text-danger">No se encontraron resultados</span>
            )}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item">
              <span className="stts">Status:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">All Status</option>
                <option value="old">Old</option>
                <option value="recent">Recent</option>
              </select>
            </li>
            <li className="list-inline-item">
              <span className="shrtby">Sort by:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setFeatured(e.target.value)}
                value={getFeatured}
              >
                <option value="">Featured All</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"> 
        <div className="listing_list_style mb20-xsd tal-991">
          <ul>
            <li
              className={`list-inline-item ${!isGridOrList ? "active" : ""}`}
              onClick={() => dispatch(toggleGridAndList(false))}
            >
              <a>
                <span className="fa fa-th-large"></span>
              </a>
            </li>
            {/* End li */}
            <li
              className={`list-inline-item ${isGridOrList ? "active" : ""}`}
              onClick={() => dispatch(toggleGridAndList(true))}
            >
              <a>
                <span className="fa fa-th-list"></span>
              </a>
            </li>
            {/* End li */}
          </ul>
        </div>      
      </div>
    </>
  );
};

export default FilterTopBar;
