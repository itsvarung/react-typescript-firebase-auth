import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Form, IFields, required, isEmail, maxLength, isNumber } from "../form";
import { Field } from "../field";

export const AdditionalDetails: React.SFC = () => {
  const fields: IFields = {
    phonenumber: {
      id: "phonenumber",
      label: "Primary Phone Number",
      validation: { rule: isNumber }
    }
  };
  return (
    <Form
      action="http://localhost:4351/api/contactus"
      fields={fields}
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Almost there! Just a bit more information :)
          </div>
          <Field {...fields.phonenumber} />
        </React.Fragment>
      )}
    />
  );
};
