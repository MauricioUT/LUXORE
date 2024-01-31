'use client'

import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //iconUrl: require("/assets/images/luxore/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});



// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];



export default function App({ property,lat = "", long= "" }) {
  console.log("entre al mapa")
  console.log(lat +" ----n-n---- "+ long)
  console.log("lat:" +property.latitude )
  console.log("long:"+property.longitude)


  return (    
        
    <MapContainer center={[Number(property.latitude == undefined ? 0 : property.latitude),Number(property.longitude == undefined ? 0 : property.longitude)]} zoom={15} scrollWheelZoom={false}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={[Number(property.latitude == undefined ? 0 : property.latitude),Number(property.longitude == undefined ? 0 : property.longitude)]}  icon={customIcon}>
      <Popup>
      </Popup>
    </Marker>   
    </MapContainer>
  );
}
