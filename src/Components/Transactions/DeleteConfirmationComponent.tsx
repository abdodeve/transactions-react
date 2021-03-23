import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import { removeTransactionAction } from "./../../Store/TransactionData/actions";
import { removeTransactionActionType } from "./../../Store/TransactionData/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4),
      borderRadius: 10,
    },
    button: {
      margin: theme.spacing(1),
      width: "100%",
      backgroundColor: "#f44336",
      color: "#fff",
    },
    buttonConfirmation: {
      margin: theme.spacing(1),
      marginTop: "3ch",
      backgroundColor: "#f44336",
      color: "#fff",
    },
  })
);

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeTransactionAction: (id: string | null) => {
      dispatch(removeTransactionAction(id));
    },
  };
};

const connector = connect(null, mapDispatchToProps);

type DeleteConfirmationComponentProps = {
  transactionID: string | null;
};
type Props = ReturnType<typeof mapDispatchToProps> &
  DeleteConfirmationComponentProps;

const DeleteConfirmationComponent = ({
  transactionID,
  removeTransactionAction,
}: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const onDelete = () => {
    removeTransactionAction(transactionID);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        className={classes.button}
        onClick={handleOpen}
      >
        Supprimer
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h4 id="transition-modal-description">
            Voulez-vous bien supprimer cette transaction ?
          </h4>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              className={classes.buttonConfirmation}
              onClick={onDelete}
            >
              Confirmer
            </Button>
          </Grid>
        </div>
      </Modal>
    </div>
  );
};

export default connector(DeleteConfirmationComponent);
