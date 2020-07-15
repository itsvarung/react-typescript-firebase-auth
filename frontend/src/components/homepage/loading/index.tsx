import React from "react";
import useStyles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}
