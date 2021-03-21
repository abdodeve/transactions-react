import * as React from "react";
import { DataGrid, GridColDef, GridCellParams } from "@material-ui/data-grid";

import { Box, Card } from "@material-ui/core";
import ShowTransaction from "./ShowModelComponent";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Date",
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <strong>
        {params.value}
        <ShowTransaction />
      </strong>
    ),
  },
  { field: "firstName", headerName: "Type", flex: 1 },
  { field: "lastName", headerName: "Mode", flex: 1 },
  {
    field: "age",
    headerName: "Montant",
    type: "number",
    flex: 1,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function GridComponent() {
  return (
    <Box mt={3}>
      <Card style={{ height: 605, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </Card>
    </Box>
  );
}
