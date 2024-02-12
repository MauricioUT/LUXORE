const AdditionalDetails = ({property,lstAmenities}) => {

//crate options
const createLIAmenities=  function() {
  let items = [];         

  if( lstAmenities !== undefined && lstAmenities.length > 0){
    console.log(lstAmenities)
    for (let i = 0; i <= lstAmenities.length; i++) {    
      if(lstAmenities[i]?.amenity !==  undefined){           
         items.push(<li key={lstAmenities[i]?.id} value={lstAmenities[i]?.id}><p>{lstAmenities[i]?.amenity}</p></li>);   
      }
    }
  }
  return items;
}


  return (
    <>
      <div className="col-md-12 col-lg-12">
        {/* <ul className="list-inline-item">
        {createLIAmenities()}
        </ul> */}
        <p>
          {property.features}
        </p>
      </div>

    </>
  );
};

export default AdditionalDetails;
