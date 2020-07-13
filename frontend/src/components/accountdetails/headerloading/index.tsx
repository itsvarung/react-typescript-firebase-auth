import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { H1, H2, AccentColorText, BackgroundCard } from "./styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import * as Styles from "./styles";
import obiwan from "../../../images/Obiwan.svg";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    textField: {
      padding: "30px 0 0 0",
      "& > *": {
        width: "100%",
      },
    },
    iconButton: {
      padding: 10,
      color: "white",
    },
    input: {
      color: "white",
    },
  })
);

const HeaderLoading: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <BackgroundCard>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <H1>Una is loading...</H1>
              </Grid>
              <Grid item xs={12}>
                <img src={obiwan} alt="Loading..." />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BackgroundCard>
    </Grid>
  );
};
export default HeaderLoading;
