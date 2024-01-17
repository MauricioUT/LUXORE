import { useDispatch, useSelector } from "react-redux";

import {
  addBathrooms,
  addBedrooms,
  addYearBuilt
} from "../../features/properties/propertiesSlice";
const GlobalSelectBox = () => {
  
  const {
    bathrooms,
    bedrooms,
    yearBuilt
  } = useSelector((state) => state.properties);

  const dispath = useDispatch();

  return (
    <>
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select" onChange={(e) => dispath(addBathrooms(e.target.value))}>
            <option>Bathrooms</option>
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
          <select className="selectpicker w100 show-tick form-select" onChange={(e) => dispath(addBedrooms(e.target.value))}>
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
          <select className="selectpicker w100 show-tick form-select" onChange={(e) => dispath(addYearBuilt(e.target.value))}>
            <option>Year built</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </li>
      {/* End li */}
    </>
  );
};

export default GlobalSelectBox;
