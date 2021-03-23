import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useForm, SubmitHandler } from "react-hook-form";

import DeleteConfirmationComponent from "./DeleteConfirmationComponent";
import { transactionType } from "../../Store/TransactionData/types";

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

type Inputs = transactionType;

type ShowModelComponentProps = {
  transaction: transactionType;
};

export default function DetailsComponent({
  transaction,
}: ShowModelComponentProps) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: transaction,
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Date"
              id="date"
              name="date"
              inputRef={register()}
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
              id="type"
              name="type"
              label="Type"
              inputRef={register()}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="mode"
              name="mode"
              inputRef={register()}
              label="Mode"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="amount"
              name="amount"
              inputRef={register()}
              label="Montant"
              type="number"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="comment"
              name="comment"
              inputRef={register()}
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
              <DeleteConfirmationComponent transactionID={transaction.id} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
