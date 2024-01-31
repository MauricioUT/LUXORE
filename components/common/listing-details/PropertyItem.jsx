const PropertyItem = ({property}) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{property.category}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{property.propertyType}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Cuartos: {property.bedrooms}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baños: {property.bathrooms}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
