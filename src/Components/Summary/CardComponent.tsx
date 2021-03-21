import React from "react";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Euro from "@material-ui/icons/Euro";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
}));

type CardComponentProps = {
  type: string;
  amount: string;
  className: string;
};

const CardComponent = ({
  type,
  amount,
  className,
  ...rest
}: CardComponentProps) => {
  const classes = useStyles();
  const styleTotal = type === "Total" ? { color: "#f1c40f" } : {};

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
          style={styleTotal}
        >
          {type}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
          style={{ justifyContent: "center" }}
        >
          <Grid className={classes.statsItem} item>
            <Euro
              className={classes.statsIcon}
              color="action"
              style={styleTotal}
            />
            <Typography
              variant="h4"
              color="textSecondary"
              display="inline"
              style={styleTotal}
            >
              {amount}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default CardComponent;
