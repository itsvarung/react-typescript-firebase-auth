import React from "react";
import { Field } from "../../components/signuppage/field";
import {
  Form,
  IFields,
  required,
  isEmail,
  maxLength
} from "../../components/signuppage/form";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory
} from "react-router-dom";

const ContactUs = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
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
    issue: {
      id: "issue",
      label: "Tell us about your problem...",
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
            Something not what you expected? Please let us know! We aim to
            respond within 3 working days.
          </div>
          <Field {...fields.firstname} />
          <Field {...fields.lastname} />
          <Field {...fields.email} />
          <Field {...fields.issue} />
          <button onClick={handleClick}>Submit</button>
        </React.Fragment>
      )}
    />
  );
};

export default ContactUs;
