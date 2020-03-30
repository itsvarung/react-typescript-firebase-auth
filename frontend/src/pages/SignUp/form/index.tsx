import * as React from "react";
import Field from "../field";
import { render } from "@testing-library/react";
import { IFieldProps } from "../field";
import { useHistory } from "react-router-dom";

export interface IFormContext extends IFormState {

  
  /* Function that allows values in the values state to be set */
  setValues: (values: IValues) => void;

  // function that validates a field!
  validate: (fieldName: string) => void;
}
/*
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
export const FormContext = React.createContext<IFormContext | any>(undefined);

// validates if a field has a value
// @param {IValues} values - all the field values in the form
// @param {string} fieldName - the field to be validated
// @returns {string} - the final error message

export const required = (values: IValues, fieldName: string): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ""
    ? "This field must be populated. Sorry!"
    : "";

// validates if a field is a valid email address
// @param {IValues} values - all field values in the form
// @param {string} fieldName - field to validate
// @returns {string} - error message

export const isEmail = (values: IValues, fieldName: string): string =>
  values[fieldName] &&
  values[fieldName].search(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
    ? "This doesn't look like a valid email address. Can you double check?"
    : "";

// validates that a field is below a defined number of characters
// @param {IValues} values - all field values in the form
// @param {string} fieldName - field to validate
// @param {number} length - defined maximum characters
// @returns {string} - error message

export const maxLength = (
  values: IValues,
  fieldName: string,
  length: number
): string =>
  values[fieldName] && values[fieldName].length > length
    ? `This field should be a maximum of ${length} characters. Please trim it down!`
    : "";

export const isNumber = (values: IValues, fieldName: string): string =>
  values[fieldName] &&
    values[fieldName].search(
      /^[0-9]*$/
    )
      ? "This must be a number"
      : "";

export interface IFields {
  [key: string]: IFieldProps;
}

interface IFormProps {
  // The http path the form will be posted to
  action: string;

  // this is the props for all of the fields on the form
  fields: IFields;

  // a prop which allows content to be injected
  render: () => React.ReactNode;
}

export interface IValues {
  // Key value pairs for all the field value with key being the field
  [key: string]: any;
}

export interface IErrors {
  // The validation error messages for each field (key is the field )
  [key: string]: string;
}

export interface IFormState {
  // the field values
  values: IValues;

  // The field validation error messages
  errors: IErrors;

  // Whether the form has been successfully submitted
  submitSuccess?: boolean;
}

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      errors,
      values
    };
  }

  // Stores new field values in state
  // @param {IValues} values - The New Field Values

  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  // executes the validation rule for the field and updates the form errors
  // @param {string} fieldName - the field to validate
  // @returns {string} - the error message

  private validate = (fieldName: string): string => {
    let newError: string = "";

    if (
      this.props.fields[fieldName] &&
      this.props.fields[fieldName].validation
    ) {
      newError = this.props.fields[fieldName].validation!.rule(
        this.state.values,
        fieldName,
        this.props.fields[fieldName].validation!.args
      );
    }
    this.state.errors[fieldName] = newError;
    this.setState({
      errors: { ...this.state.errors, [fieldName]: newError }
    });
    return newError;
  };

  // Returns whether there are any errors in the errors object that is passed in
  // @param {IErrors} errors - The field errors
  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  // handles form submission
  // @param {React.FormEvent<HTMLFormElement>} e (the form event)

  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    console.log(this.state.values);

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  // executes the validation rules for all the fields on the form and sets the error state
  // @returns {boolean} - whether the form is valid or not

  private validateForm(): boolean {
    const errors: IErrors = {};
    Object.keys(this.props.fields).map((fieldName: string) => {
      errors[fieldName] = this.validate(fieldName);
    });
    this.setState({ errors });
    return !this.haveErrors(errors);
  }

  // this section submits the form to the http API
  // @returns {boolean} - whether the form submission was successful or not

  private async submitForm(): Promise<boolean> {
    try {
      const response = await fetch(this.props.action, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify(this.state.values)
      });
      if (response.status === 400) {
        // map validation errors to IErrors
        let responseBody: any;
        responseBody = await response.json();
        const errors: IErrors = {};
        Object.keys(responseBody).map((key: string) => {
          // for asp.net core, field names are in title case - worth adding a camel case conversion
          const fieldName = key.charAt(0).toLowerCase() + key.substring(1);
          errors[fieldName] = responseBody[key];
        });
        this.setState({ errors });
      }
      return response.ok;
    } catch (ex) {
      return false;
    }
  }

  public render() {
    const { submitSuccess, errors } = this.state;
    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues,
      validate: this.validate
    };

    

    return (
      <FormContext.Provider value={context}>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          <div className="container">
            {this.props.render()}
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.haveErrors(errors)}
              >
                Submit your details!
              </button>
            </div>
            {submitSuccess && (
              <div className="alert alert-info" role="alert">
                The form was successfully submitted!
              </div>
            )}
            {submitSuccess === false && !this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, an unexpected error has occurred.
              </div>
            )}
            {submitSuccess === false && this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, the form is invalid. Please review, adjust and try again
              </div>
            )}
          </div>
        </form>
      </FormContext.Provider>
    );
  }
}
