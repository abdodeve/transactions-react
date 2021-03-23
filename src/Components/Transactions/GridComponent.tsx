import React, { useEffect } from "react";
import { DataGrid, GridColDef, GridCellParams } from "@material-ui/data-grid";
import { connect, ConnectedProps } from "react-redux";

import { Box, Card, Button } from "@material-ui/core";
import ShowModelComponent from "./ShowModelComponent";
import { readJson } from "./../../Utils/TransactionsUtil";
import { transactionType } from "../../Store/TransactionData/types";
import { setTransactionsAction } from "../../Store/TransactionData/actions";
import { debits, credits, total } from "./../../Utils/TransactionsUtil";

const columns: GridColDef[] = [
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <strong>
        <ShowModelComponent transaction={params.row as transactionType} />
        {params.value}
      </strong>
    ),
  },
  {
    field: "datetime",
    headerName: "Date",
    flex: 1,
  },
  { field: "mode", headerName: "Mode", flex: 1 },
  {
    field: "amount",
    headerName: "Montant",
    type: "number",
    flex: 1,
  },
];

interface RootState {
  TransactionStore: Array<transactionType>;
}
const mapStateToProps = (state: RootState, ownProps: any) => ({
  transactionStore: state.TransactionStore,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTransactionsAction: (data: transactionType[]) => {
      dispatch(setTransactionsAction(data));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const GridComponent: React.FC<Props> = ({ transactionStore }) => {
  return (
    <Box mt={3}>
      <Box display="flex" flexDirection="row" mb={1} mr={1}>
        <Box p={1} mr={1}>
          Crédit: {credits(transactionStore)}
        </Box>
        <Box p={1} mr={1}>
          Débits: {debits(transactionStore)}
        </Box>
        <Box p={1} mr={1}>
          Total: {total(transactionStore)}
        </Box>
      </Box>
      <Card style={{ height: 659, width: "100%" }}>
        <DataGrid rows={transactionStore} columns={columns} pageSize={10} />
      </Card>
    </Box>
  );
};

export default connector(GridComponent);
