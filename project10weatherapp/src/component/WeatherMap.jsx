import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 10);

  return null;
}

function WeatherMap({ lat, lon, city }) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ height: "500px", width: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView center={[lat, lon]} />

      <Marker position={[lat, lon]}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default WeatherMap;