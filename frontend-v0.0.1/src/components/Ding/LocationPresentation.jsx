import React, { useState, useEffect } from "react";
import { Map, Marker, ZoomControl, GeoJson } from "pigeon-maps";
import "./styles/LocationPre.css";
const geoJsonSample = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [51.0612261, 35.6657922] },
      properties: { prop0: "value0" },
    },
  ],
};

const LocationPre = (props) => {
  const [center, setCenter] = useState([50.879, 4.6997]);
  const [zoom, setZoom] = useState(16);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setCenter([position.coords.latitude, position.coords.longitude]);
  }
  return (
    <React.Fragment>
      <div className="mapSection">
        <Map
          height={300}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
          onClick={getLocation}
        >
          <Marker width={50} anchor={center} />
          <GeoJson
            data={geoJsonSample}
            styleCallback={(feature, hover) => {
              if (feature.geometry.type === "LineString") {
                return { strokeWidth: "1", stroke: "black" };
              }
              return {
                fill: "#d4e6ec99",
                strokeWidth: "1",
                stroke: "white",
                r: "20",
              };
            }}
          />
          <ZoomControl />
        </Map>
        <button className="relocateMap" onclick={getLocation}><i class="fa-solid fa-location-arrow"></i></button>
        </div>
    </React.Fragment>
  );
};

export default LocationPre;
