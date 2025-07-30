"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function Home() {
  useEffect(() => {
    // Import Leaflet dynamically on the client
    import("leaflet").then((L) => {
      const map = L.map("map").setView([40.7815, -73.9658], 13);

      L.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
        {
          tileSize: 512,
          zoomOffset: -1,
          maxZoom: 18,
          id: "mapbox/streets-v11",
      
        }
      ).addTo(map);
    });
  }, []);

  return (
    <div>
      <h1>Crime Map</h1>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
}
