import React from "react";
import { DataGrid } from "devextreme-react";
import "./FlightView.scss";
import { Flight } from "../../types/Flight";

interface FlightViewProps {
  flights: Flight[];
  onFlightSelect: (flightId: string) => void;
}

const FlightView: React.FC<FlightViewProps> = ({ flights, onFlightSelect }) => {
  const handleRowClick = (event: any) => {
    const flightId = event.data.flightId;
    onFlightSelect(flightId);
  };

  const columns = [
    {
      caption: "Flight",
      calculateCellValue: (rowData: Flight) =>
        `${rowData.airlineCode} ${rowData.flightNumber}`,
    },
    "flightDate",
    {
      caption: "Origin -> Destination",
      calculateCellValue: (rowData: Flight) =>
        `${rowData.origin} -> ${rowData.destination}`,
    },
  ];

  return (
    <div className="flight-list-view">
      <DataGrid
        dataSource={flights}
        columns={columns}
        onRowClick={handleRowClick}
        hoverStateEnabled={true}
      />
    </div>
  );
};

export default FlightView;
