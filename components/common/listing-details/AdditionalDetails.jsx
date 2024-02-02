const AdditionalDetails = ({lstAmenities}) => {

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
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
        {createLIAmenities()}
        </ul>
      </div>

    </>
  );
};

export default AdditionalDetails;
