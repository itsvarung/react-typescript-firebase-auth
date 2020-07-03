import React from "react";
import { LinearProgress, Box, Typography } from "@material-ui/core";

interface Props {
  progress: number;
}

export const ProgressBar: React.FC<Props> = (props) => {
  return (
    <Box alignItems="center">
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.progress
        )}%`}</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          value={props.progress}
        />
      </Box>
    </Box>
  );
};
