import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyItem from "../common/listing-details/PropertyItem";
// import Map from "../common/map/Map"
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../common/map/Map"), { ssr: false });



const DetailsContent = ({property}) => {
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem  property={property}  />
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Descripción</h4>
        {property.description}
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Detalles de la propiedad</h4>
          </div>
          <PropertyDetails property={property} />
        </div>
      </div>
      {/* End .additional_details */}

       <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Amenidades</h4>
          </div>
          <AdditionalDetails lstAmenities={property.lstAmenities} />
        </div>
      </div>
      {/* End .additional_details */} 

      <div className="application_statics mt30">
        <h4 className="mb30">
          MAPA
        </h4>
        <div id="map" className="row">
                <Map property={property} lat={property.latitude} long={property.longitude} />
         </div>
      </div>
      {/* End .location_area */}

    </>
  );
};

export default DetailsContent;
