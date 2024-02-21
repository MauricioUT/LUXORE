const AdditionalDetails = ({property,lstAmenities}) => {

//crate options
const createLIAmenities=  function() {
  let items = [];         

  if( lstAmenities !== undefined && lstAmenities.length > 0){
    console.log(lstAmenities)
    for (let i = 0; i <= lstAmenities.length; i++) {    
      if(lstAmenities[i]?.amenity !==  undefined){           
         items.push(<div className="col-xxs-6 col-sm-6 col-lg-4 col-xl-3 "><li key={lstAmenities[i]?.id} value={lstAmenities[i]?.id}><p>{lstAmenities[i]?.amenity}</p></li></div>);   
      }
    }
  }
  return items;
}


  return (
    <>
      <div className="col-md-12 col-lg-12">
        <ul className="ui_kit_checkbox selectable-list row">
            
            {createLIAmenities()}
            
      
        </ul>
       
      </div>

    </>
  );
};

export default AdditionalDetails;
