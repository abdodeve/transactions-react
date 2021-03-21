import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import DeleteConfirmationComponent from "./DeleteConfirmationComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "100%",
      },
      flexGrow: 1,
      width: "80ch",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1),
      width: "100%",
      backgroundColor: "#f44336",
      color: "#fff",
    },
  })
);

export default function DetailsComponent() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="datetime-local"
              label="Date"
              type="datetime-local"
              defaultValue="2020-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Type"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Mode"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Montant"
              type="number"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Commentaire"
              multiline
              rows={4}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4}>
              <DeleteConfirmationComponent />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
