import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Form, IFields, required, isEmail, maxLength, isNumber } from "../form";
import { Field } from "../field";

export const Address: React.SFC = () => {
  const fields: IFields = {
    university: {
      id: "university",
      label: "University",
      editor: "dropdown",
      options: ["", "Lancaster", "Nottingham", "Essex", "Manchester"],
      validation: { rule: required }
    },
    housenumber: {
      id: "housenumber",
      label: "House Number",
      validation: { rule: isNumber }
    },
    address: {
      id: "address",
      label: "Address",
      validation: { rule: required }
    },
    city: {
      id: "city",
      label: "City",
      validation: { rule: required }
    },
    county: {
      id: "county",
      label: "County",
      validation: { rule: required }
    },
    postcode: {
      id: "postcode",
      label: "Postcode",
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
            Thanks for that! Now, please tell us more...
          </div>
          <Field {...fields.university} />
          <Field {...fields.housenumber} />
          <Field {...fields.address} />
          <Field {...fields.city} />
          <Field {...fields.county} />
          <Field {...fields.postcode} />
        </React.Fragment>
      )}
    />
  );
};
