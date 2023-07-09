import React from "react";
import { DataGrid } from "devextreme-react";
import { Flight } from "../../types/Flight";
import { Contingent } from "../../types/Contingent";
import contingentsData from "../../data/contingentsData.json";
import flightsData from "../../data/flightsData.json";
import "./FlightDetail.scss";

interface FlightDetailProps {
  flightId: string;
}

const FlightDetail: React.FC<FlightDetailProps> = ({ flightId }) => {
  const flight: Flight | undefined = flightsData.find(
    (flight) => flight.flightId === flightId
  );
  const contingents: Contingent[] = contingentsData.filter(
    (contingent) => contingent.flightId === flightId
  );

  const columns = ["clientCode", "totalSeats", "bookedSeats"];

  return (
    <div className="flight-detail-view">
      <h2>Flight Details</h2>
      <p>
        Flight: {flight?.airlineCode} {flight?.flightNumber}
      </p>
      <p>Date: {flight?.flightDate}</p>
      <p>Origin: {flight?.origin}</p>
      <p>Destination: {flight?.destination}</p>

      <h3>Contingents</h3>
      <DataGrid dataSource={contingents} columns={columns} />
    </div>
  );
};

export default FlightDetail;
