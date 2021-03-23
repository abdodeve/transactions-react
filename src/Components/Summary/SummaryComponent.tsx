import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent";
import { connect, ConnectedProps } from "react-redux";

import { debits, credits, total } from "./../../Utils/TransactionsUtil";
import { transactionType } from "../../Store/TransactionData/types";
import { setTransactionsAction } from "../../Store/TransactionData/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: 250,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    productCard: {
      height: "100%",
    },
  })
);

interface RootState {
  TransactionStore: Array<transactionType>;
}
const mapStateToProps = (state: RootState, ownProps: any) => ({
  transactionStore: state.TransactionStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

const SummaryComponent: React.FC<Props> = ({ transactionStore }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardComponent
            type="Débits"
            amount={debits(transactionStore)}
            className={classes.productCard}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            type="Crédits"
            amount={credits(transactionStore)}
            className={classes.productCard}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            type="Total"
            amount={total(transactionStore)}
            className={classes.productCard}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default connector(SummaryComponent);
