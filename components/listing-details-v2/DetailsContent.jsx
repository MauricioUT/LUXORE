import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";

const DetailsContent = () => {
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem />
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Description</h4>
        <PropertyDescriptions />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          Location{" "}
          <small className="float-end">
            1421 San Pedro St, Los Angeles, CA 90015
          </small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation />
        </div>
      </div>
      {/* End .location_area */}

    </>
  );
};

export default DetailsContent;
