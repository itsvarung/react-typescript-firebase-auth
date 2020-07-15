import React from "react";
import * as User from "../../../models/User";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

interface Props {
  userDeets: User.User;
}

const userDetails: React.FC<Props> = (props) => {
  // console.log(props.userDeets.keys);
  return (
    <React.Fragment>
      <h1>
        Your Details
        <React.Fragment>
          <p>Basic Details</p>
          <TextField
            label="First Name"
            value={props.userDeets.basicDetails.firstname}
          />
          <TextField
            label="Last name"
            value={props.userDeets.basicDetails.lastname}
          />
          <TextField
            label="Email Address"
            value={props.userDeets.basicDetails.email}
          />
          <TextField
            label="Street Address"
            value={props.userDeets.basicDetails.address}
          />
          <TextField
            label="Date of Birth"
            value={props.userDeets.basicDetails.dob}
          />
          <TextField
            label="Phone Number"
            value={props.userDeets.basicDetails.phone}
          />
          <TextField
            label="Password"
            value={props.userDeets.basicDetails.password}
          />
        </React.Fragment>
      </h1>
    </React.Fragment>
  );
};

export default userDetails;

/*

{props.userDeets.basicDetails.map((form) => (
          <Grid item xs={4} key={form.id}>
            <FormCard
              title={form.title}
              description={form.description}
              cardColor={form.cardColor}
              progress={form.progress}
              url={form.url}
            />
          </Grid>
        ))}

*/
