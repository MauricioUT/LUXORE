const PropertyDetails = ({property}) => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Identificador: <span>LX-{property.id}</span>
            </p>
          </li>
          <li>
            <p>
              Precio: <span>{property.price}</span>
            </p>
          </li>
          <li>
            <p>
              Superficie: <span>{property.metersSurface}m2</span>
            </p>
          </li>
          <li>
            <p>
              Superficie construida: <span>{property.metersBuilded}m2</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Recamaras: <span>{property.bedrooms}</span>
            </p>
          </li>
          <li>
            <p>
              Baños: <span>{property.bathrooms}</span>
            </p>
          </li>
          <li>
            <p>
            Estacionamiento: <span>{property.carsNumber > 0 ? 'Si': 'No'}</span>
            </p>
          </li>
         
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
        <li>
            <p>
              Autos por estacionamiento: <span>{property.carsNumber > 0 ?  property.carsNumber : 'N/A'}</span>
            </p>
          </li>
          <li>
            <p>
              Tipo: <span>{property.propertyType}</span>
            </p>
          </li>
          <li>
            <p>
              Estatus : <span>{property.category}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
