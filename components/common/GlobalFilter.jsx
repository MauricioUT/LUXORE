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
  addCount,
  addCurrentPage,
  addSkip
} from "../../features/properties/propertiesSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import InputRange from "react-input-range";
import { NumericFormat } from 'react-number-format';

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
    skip,
    currentPage
    } = useSelector((state) => state.properties);


  // input state
  const [price, setPrice] = useState({ value: { min: 10000, max: 150000000 } });
  const [getStatus, setStatus] = useState(status);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getState, setState] = useState(state);
  const [getCity, setCity] = useState(city);
  const [getNeighborhood, setNeighborhood] = useState(neighborhood);
  const [getLstProperties, setLstProperties] = useState([]);
  const [getCount, setCount] = useState([]);

  //catalogos
  const [getPropertyTypes, setPropertyTypes]=  useState([]);
  const [getStates, setStates]=  useState([]);
  const [getCities, setCities]=  useState([]);
  const [getColonies, setColonies]=  useState([]);

  const [getAdvanced, setAdvanced] = useState([]);

  const [getCurrentPage, setCurrentPage] = useState(0);



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

    // currentPage
    useEffect(() => {

    dispath(addCurrentPage(getCurrentPage));
  }, [dispath, getCurrentPage]);

  useEffect(() => {
    if(testVar == featuredId ){
      console.log('by feature')
      setCount([]);
     onSearch();
    }
    },[featuredId]);
  
  
    useEffect( () =>{
      if(testVar == featuredId ){
        console.log('by skip')
         onSearch();
      }
    },[skip])
     

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };



  const clearAllFilters = () => {
    setStatus("");
    setBathroom("");
    setBedroom("");
    setPrice({ value: { min: 10000, max: 100000000 }});
    dispath(resetAmenities());

    setState(0);
    setCity(0);
    setNeighborhood(0);

    setCities([]);
    setColonies([]);

    clearAdvanced();

    dispath(addCurrentPage(0));
    dispath(addSkip(0));
    onSearchInitial();
  };


// 
const handleOnChange = (value) => {
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

    addLstProperties(getLstProperties),

    
  );
}, [dispath, getLstProperties]);

useEffect(() => {
  dispath(
    addCount(getCount)
  );
}, [dispath, getCount]);


//search button
  const onSearch =() =>  {
     (async () => {
      const response = await fetch('/api/properties', {
        method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
        body: JSON.stringify({
          "idCategory":featuredId,
          "idPropertyType":getStatus,
          "idState":getState,
          "idCity":getCity,
          "idColony":getNeighborhood, 
          "bedrooms":getBedroom, 
          "bathrooms":getBathroom, 
          "price":price, 
          "amenities":getAdvanced.filter(bathroomHandler).map((obj) => obj.id), 
          "limit":9, 
          "offset": skip 
        })
      })
     
      const data = await response.json();
      //dispath(setCount(0));
      console.log(getCount);
      setCount(data.count);
      addCount(getCount)
      setLstProperties(data.lstHoms);      
    })();
  }


  const onSearchInitial =() =>  {
    (async () => {
     const response = await fetch('/api/properties', {
       method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
       body: JSON.stringify({
         "idCategory":featuredId,
         "idPropertyType":0,
         "idState":0,
         "idCity":0,
         "idColony":0, 
         "bedrooms":0, 
         "bathrooms":0, 
         "price":{ value: { min: 10000, max: 150000000 }}, 
         "amenities":[], 
         "limit":9, 
         "offset": 0 
       })
     })
    
     const data = await response.json();
     setCount(data.count)
     setLstProperties(data.lstHoms);      
   })();
 }

 const onClickSearch =() =>  {
    dispath(addCurrentPage(0));
    dispath(addSkip(0));
      onSearch();
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



  const changeState =  function(state){
    setState(state);
    setColonies([]);
    setCities([]);
    setCity(0);
    setNeighborhood(0);
    getCitiesFunction(state);
  }
  const changeCity =  function(city){
    setCity(city)
    getColoniesFunction(city);
  }

 

  useEffect(() => {
    // Cargar datos al renderizar
    getPropertyTypesFunction();
    getStatesFunction();
    getAmenities();
  }, []);


  //call apis
  const getPropertyTypesFunction=  function(){
      (async () => {
        const response = await fetch('/api/catalogos/C_PROPERTY_TYPES', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
        const data = await response.json()
        setPropertyTypes(data);
      })();
  }

  const getStatesFunction=  function(){
      (async () => {
        const response = await fetch('/api/catalogos/C_STATES', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
        const data = await response.json()
        setStates(data);
      })();
  }

  const getCitiesFunction=  function(state){
    (async () => {
      const response = await fetch('/api/ciudades/' + state, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await response.json()
      setCities(data);
    })();
  }

  const getColoniesFunction=function(city){
    (async () => {
      const response = await fetch('/api/colonias/' + city, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await response.json()
      setColonies(data);
    })();
  }

  const getAmenities =  function(){
    (async () => {
      const response = await fetch('/api/catalogos/C_AMENITIES', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await response.json()
      setAdvanced(data);
    })();
  }

//crate options
 const createPropertyTypesSelectItems=  function() {
    let items = [];         
    if(getPropertyTypes.length > 0){
      for (let i = 0; i <= getPropertyTypes.length; i++) {    
        if(getPropertyTypes[i]?.propertyType !==  undefined){           
           items.push(<option key={getPropertyTypes[i]?.id} value={getPropertyTypes[i]?.id}>{getPropertyTypes[i]?.propertyType}</option>);   
        }
      }
    }
    return items;
}

const createStatesSelectItems=  function() {
  let items = [];         
  if(getStates.length > 0){
    for (let i = 0; i <= getStates.length; i++) {      
      if(getStates[i]?.state !==  undefined){       
         items.push(<option key={getStates[i]?.id} value={getStates[i]?.id}>{getStates[i]?.state}</option>);   
      }
    }
  }
  return items;
}

const createCitiesSelectItems=  function() {
  let items = [];         
  if(getCities.length > 0){
    for (let i = 0; i <= getCities.length; i++) {      
      if(getCities[i]?.city !==  undefined){       
         items.push(<option key={getCities[i]?.id} value={getCities[i]?.id}>{getCities[i]?.city}</option>);   
      }
    }
  }
  return items;
}


const createColoniesSelectItems=  function() {
  let items = [];         
  if(getColonies.length > 0){

    for (let i = 0; i <= getColonies.length; i++) {      
      if(getColonies[i]?.colony !==  undefined){       
         items.push(<option key={getColonies[i]?.id} value={getColonies[i]?.id}>{getColonies[i]?.colony}</option>);   
      }
    }
  }
  return items;
}

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
                <option value="">Tipo de propiedad</option>
                {createPropertyTypesSelectItems()}
              </select>
            </div>
          </div>
        </li>
        {/* End li */}


          {/* Estado */}
          <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => changeState(e.target.value)} value={getState}>
              <option value={0}>Estado</option>
              {createStatesSelectItems()}
            </select>
          </div>
          </li>
        {/* End li */}

          {/* Ciudad */}
          <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => changeCity(e.target.value)} value={getCity}>
              <option value={0}>Ciudad</option>
              {createCitiesSelectItems()}
            </select>
          </div>
          </li>
          {/* End li */}

           {/* Colonia */}
           <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => setNeighborhood(e.target.value)} value={getNeighborhood}>
              <option value={0}>Colonia</option>
             {createColoniesSelectItems()}
            </select>
          </div>
          </li>
          {/* End li */}

         {/* bathrooms */}
        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select"
              onChange={(e) => setBathroom(e.target.value)}
              value={getBathroom}>
              <option value="">Baños</option>
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
         
          {/* rooms*/}
        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select" onChange={(e) => setBedroom(e.target.value)} value={getBedroom}>
              <option value="">Recamaras</option>
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
              <span>Rango de precio</span>
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
                      <NumericFormat value={price.value.min} displayType={'text'} thousandSeparator={true} prefix={'$'} />       

                    </div>
                  </div>
                  <div className="nft__filter-price-box">
                    <div className="d-flex align-items-center">
                      <NumericFormat value={price.value.max} displayType={'text'} thousandSeparator={true} prefix={'$'} />       
                    </div>
                  </div>
                </div>

                <InputRange
                  formatLabel={(value) => ``}
                  maxValue={150000000}
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
                Amenidades <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenidades</h4>
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
                                    value={feature.amenity}
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
                                    {feature.amenity}
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
              Borrar filtros
            </button>
          </div>
        </li>
        {/* End li */}


                  {/* clear filter */}
                  <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={onClickSearch}
              type="button"
              className="btn btn-thm"
            >
              Buscar
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
