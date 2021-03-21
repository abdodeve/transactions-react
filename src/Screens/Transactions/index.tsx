import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Container,
  makeStyles,
} from "@material-ui/core";
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
