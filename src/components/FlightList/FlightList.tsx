import React, { useState } from "react";
import flightsData from "../../data/flightsData.json";
import FlightView from "../FlightView/FlightView";
import FlightDetail from "../FlightDetail/FlightDetail";

const FlightList: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  const handleFlightSelect = (flightId: string) => {
    setSelectedFlight(flightId);
  };

  return (
    <div className="flight-list-page">
      <FlightView flights={flightsData} onFlightSelect={handleFlightSelect} />
      {selectedFlight && <FlightDetail flightId={selectedFlight} />}
    </div>
  );
};

export default FlightList;
