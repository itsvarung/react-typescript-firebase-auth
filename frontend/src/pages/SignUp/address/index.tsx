import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Form, IFields, required, isEmail, maxLength } from "../form";
import { Field } from "../field";

export const Address: React.SFC = () => {
  const fields: IFields = {
    university: {
      id: "university",
      label: "University",
      editor: "dropdown",
      options: ["", "Lancaster", "Nottingham", "Essex", "Manchester"],
      validation: { rule: required }
    }
  };
  return (
    <Form
      action="http://localhost:4351/api/contactus"
      fields={fields}
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Welcome to Una! Please tell us a bit about yourself :)
          </div>
          <Field {...fields.university} />
        </React.Fragment>
      )}
    />
  );
};
