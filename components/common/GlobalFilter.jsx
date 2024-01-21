'use client'

import {
  addPrice,
  addStatus,
  resetAmenities,
  addBathrooms,
  addBedrooms,
  addStates,
  addCity,
  addNeighborhood,
  addAmenities,
  addLstProperties,
} from "../../features/properties/propertiesSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import InputRange from "react-input-range";
import { v4 as uuidv4 } from "uuid";
import properties from "../../data/properties";


const GlobalFilter = ({ className = "", testVar = "" }) => {
  const router = useRouter()

  const {
    status,
    bathrooms,
    bedrooms,
    state,
    city,
    neighborhood,
    featuredId,
    } = useSelector((state) => state.properties);


  // input state
  const [price, setPrice] = useState({ value: { min: 10000, max: 20000 } });
  const [getStatus, setStatus] = useState(status);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getState, setState] = useState(state);
  const [getCity, setCity] = useState(city);
  const [getNeighborhood, setNeighborhood] = useState(neighborhood);
  const [getLstProperties, setLstProperties] = useState([]);

  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Barbeque" },
    { id: uuidv4(), name: "Gym" },
    { id: uuidv4(), name: "Microwave" },
    { id: uuidv4(), name: "TV Cable" },
    { id: uuidv4(), name: "Lawn" },
    { id: uuidv4(), name: "Refrigerator" },
    { id: uuidv4(), name: "Swimming Pool" },
    { id: uuidv4(), name: "WiFi" },
    { id: uuidv4(), name: "Sauna" },
    { id: uuidv4(), name: "Dryer" },
    { id: uuidv4(), name: "Washer" },
    { id: uuidv4(), name: "Laundry" },
    { id: uuidv4(), name: "Outdoor Shower" },
    { id: uuidv4(), name: "Window Coverings" },
  ]);



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


   // states
   useEffect(() => {
    dispath(addStates(getState));
  }, [dispath, getState]);

    // City
    useEffect(() => {
      dispath(addCity(getCity));
    }, [dispath, getCity]);

      // City
      useEffect(() => {
        dispath(addNeighborhood(getNeighborhood));
      }, [dispath, getNeighborhood]);

      

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };



  const clearAllFilters = () => {
    setStatus("");
    setBathroom("");
    setBedroom("");
    setPrice({ value: { min: 10000, max: 20000 }});
    dispath(resetAmenities());

    setState(0);
    setCity(0);
    setNeighborhood(0);

    clearAdvanced();
  };


// 
const handleOnChange = (value) => {
  console.log(value)
  setPrice({ value });
};

// price add to state
useEffect(() => {
  dispath(
    addPrice({
      min: price.value.min,
      max: price.value.max,
    })
  );
}, [dispath, price]);

//Lista de prpiedades
useEffect(() => {
  dispath(

    addLstProperties(getLstProperties)
  );
}, [dispath, getLstProperties]);


//search button
  const onSearch =() =>  {
    const consulta = {
      city: getCity
    }
     console.log("soy la busqueda" + getCity +' price: ' + price.value.max + ' checks:' + getAdvanced.filter(bathroomHandler).length)

     //notificar a featureditem
     setLstProperties(properties);
     console.log(getLstProperties)
  }

  // bathroom handler
  const bathroomHandler = (item) => {
      return item.isChecked;
  };


  //checks
  
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    setAdvanced(data);
  };

    // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
  };

 useEffect(() => {
  if(testVar == featuredId ){
   onSearch();
  }
  },[featuredId]);

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">

        {/* property type */}
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


          {/* Estado */}
          <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => setState(e.target.value)} value={getState}>
              <option value={0}>Estado</option>
              <option value={1}>CDMX</option>
              <option value={2}>Chiapas</option>
              <option value={3}>Estado de México</option>
            </select>
          </div>
          </li>
        {/* End li */}

          {/* Ciudad */}
          <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => setCity(e.target.value)} value={getCity}>
              <option value={0}>Ciudad</option>
              <option value={1}>Iztapalapa</option>
              <option value={2}>Coyoacan</option>
              <option value={3}>Ecatepec</option>
              <option value={4}>Comitan</option>
              <option value={5}>Coacalco</option>
            </select>
          </div>
          </li>
          {/* End li */}

           {/* Colonia */}
           <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => setNeighborhood(e.target.value)} value={getNeighborhood}>
              <option value={0}>Colonia</option>
              <option value={1}>Colonia de Iztapalapa1</option>
              <option value={2}>Colonia de Ecatepec1</option>
              <option value={3}>Colonia de Coyoacan1</option>
              <option value={4}>Colonia de Ecatepec2</option>
              <option value={5}>Colonia de Comitan1</option>
              <option value={6}>Colonia de Iztapalapa2</option>
              <option value={7}>Colonia de Iztapalapa3</option>
              <option value={8}>Colonia de Coacalco1</option>
            </select>
          </div>
          </li>
          {/* End li */}

         {/* bedrooms */}
        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select"
              onChange={(e) => setBedroom(e.target.value)}
              value={getBedroom}>
              <option value="">Bedrooms</option>
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
         
          {/* bathrooms */}
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

          {/* price */}
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
              <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
                <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
                  <div className="nft__filter-price-box">
                    <div className="d-flex align-items-center">
                      <span>$ </span>
                      <span>{price.value.min}</span>
                    </div>
                  </div>
                  <div className="nft__filter-price-box">
                    <div className="d-flex align-items-center">
                      <span>$ </span>
                      <span>{price.value.max}</span>
                    </div>
                  </div>
                </div>

                <InputRange
                  formatLabel={(value) => ``}
                  maxValue={20000}
                  minValue={10000}
                  value={price.value}
                  onChange={(value) => handleOnChange(value)}
                />

                <div className="slider-styled inside-slider" id="nft-slider"></div>
              </div>
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

          {/* advanced */}
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

                  <div className="row">
                <ul className="ui_kit_checkbox selectable-list row">
                    {getAdvanced?.map((feature) => (
                      <div className="col-xxs-6 col-sm-6 col-lg-4 col-xl-3 ">
                            <li key={feature.id}>
                                <div className="form-check custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={feature.id}
                                    value={feature.name}
                                    checked={feature.isChecked || false}
                                    onChange={(e) =>
                                      dispath(addAmenities(e.target.value))
                                    }
                                    onClick={() => advancedHandler(feature.id)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={feature.id}
                                  >
                                    {feature.name}
                                  </label>
                                </div>
                            </li>
                      </div>
                    
                    ))}
                  </ul>
           </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

          {/* clear filter */}
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


                  {/* clear filter */}
                  <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={onSearch}
              type="button"
              className="btn btn-thm"
            >
              buscar
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
