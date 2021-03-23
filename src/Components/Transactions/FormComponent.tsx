import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import moment from "moment";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@material-ui/core";

import { transactionType } from "../../Store/TransactionData/types";
import { addTransactionAction } from "../../Store/TransactionData/actions";

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
    },
  })
);

type Inputs = transactionType;

interface RootState {
  TransactionStore: Array<transactionType>;
}

const mapStateToProps = (state: RootState, ownProps: any) => ({
  transactionStore: state.TransactionStore,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTransactionAction: (data: transactionType) => {
      dispatch(addTransactionAction(data));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type compProps = {
  onClose: Function;
};
type Props = ReturnType<typeof mapDispatchToProps> & compProps;

const FormComponent: React.FC<Props> = ({
  addTransactionAction,
  onClose,
}: Props) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>();
  const [value, setValue] = React.useState("crédit");

  var defaultDate = moment().format("YYYY-MM-DDThh:mm:ss");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onClose();
    const newTransaction = { ...data, id: uuid() };
    addTransactionAction(newTransaction);
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="datetime"
              name="datetime"
              inputRef={register({ required: true })}
              label="Date"
              type="datetime-local"
              defaultValue={defaultDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type</FormLabel>
              <RadioGroup
                row
                aria-label="type"
                name="type"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="crédit"
                  control={<Radio />}
                  label="Crédit"
                  inputRef={register({ required: true })}
                />
                <FormControlLabel
                  value="débit"
                  control={<Radio />}
                  label="Débit"
                  inputRef={register({ required: true })}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="mode"
              name="mode"
              inputRef={register({ required: true })}
              label="Mode"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="amount"
              name="amount"
              inputRef={register({ required: true })}
              label="Montant"
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="comment"
              name="comment"
              inputRef={register}
              label="Commentaire"
              multiline
              rows={4}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={handleSubmit(onSubmit)}
              >
                Valider
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default connector(FormComponent);
