import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent";

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

export default function SummaryComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardComponent
            type="Débits"
            amount="183"
            className={classes.productCard}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            type="Crédits"
            amount="150"
            className={classes.productCard}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            type="Total"
            amount="1980"
            className={classes.productCard}
          />
        </Grid>
      </Grid>
    </div>
  );
}
