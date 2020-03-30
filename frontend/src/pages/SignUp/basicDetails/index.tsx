import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Form, IFields, required, isEmail, maxLength } from "../form";
import { Field } from "../field";

export const BasicDetails: React.SFC = () => {
  const fields: IFields = {
    firstname: {
      id: "firstname",
      label: "First Name",
      validation: { rule: required }
    },
    lastname: {
      id: "lastname",
      label: "Last Name",
      validation: { rule: required }
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail }
    },
    dob: {
      id: "dob",
      label: "Date of Birth"
    },
    university: {
      id: "university",
      label: "University",
      editor: "dropdown",
      options: ["", "Lancaster", "Nottingham", "Essex", "Manchester"],
      validation: { rule: required }
    },
    about: {
      id: "about",
      label: "About You",
      editor: "multilinetextbox",
      validation: { rule: maxLength, args: 200 }
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
          <Field {...fields.firstname} />
          <Field {...fields.lastname} />
          <Field {...fields.dob} />
          <Field {...fields.email} />
          <Field {...fields.university} />
          <Field {...fields.about} />
        </React.Fragment>
      )}
    />
  );
};
