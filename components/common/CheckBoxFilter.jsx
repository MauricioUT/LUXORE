import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAmenities
} from "../../features/properties/propertiesSlice";
import { v4 as uuidv4 } from "uuid";

const CheckBoxFilter = () => {
    const {
      keyword,
      location,
      status,
      propertyType,
      bathrooms,
      bedrooms,
      garages,
      yearBuilt,
      area,
      amenities,
    } = useSelector((state) => state.properties);
  

  // advanced state
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

  return (
    <>
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
           
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
