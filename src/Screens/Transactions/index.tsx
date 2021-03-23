import React from "react";
import { Box, Container } from "@material-ui/core";
import GridComponent from "../../Components/Transactions/GridComponent";
import NewTransactionComponent from "../../Components/Transactions/NewModelComponent";

const TransactionsListScreen = () => {
  return (
    <Container maxWidth={false}>
      <Box display="flex" justifyContent="flex-end">
        <NewTransactionComponent />
      </Box>
      <GridComponent />
    </Container>
  );
};

export default TransactionsListScreen;
