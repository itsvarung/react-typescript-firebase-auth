import * as React from "react";
import { IErrors, IFormContext, FormContext, IValues } from "../form";

//The available editors for the field
type Editor = "textbox" | "multilinetextbox" | "dropdown" | "datebox";

// Alwaysssss watching
// Mike Wazowski :!D Accidental Hitler

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string;
  args?: any;
}

export interface IFieldProps {
  // The unique field name
  id: string;

  // label text
  label?: string;

  //editor
  editor?: Editor;

  //options
  options?: string[];

  //field value
  value?: any;

  // field validator function
  validation?: IValidation;
}

export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
  // get validation error
  // @param {IErrors} - ALL errors on the form
  // @param {string[]} - validation error
  const getError = (errors: IErrors): string => (errors ? errors[id] : "");
  // get inline styles for editor
  // @param {IErrors} errors - ALL errors on the form
  // @returns {any} - the style object!
  const getEditorStyle = (errors: IErrors): any =>
    getError(errors) ? { borderColor: "red" } : {};
  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div className="form-group">
          {label && <label htmlFor={id}>{label}</label>}

          {editor!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={(e: React.FormEvent<HTMLInputElement>) =>
                context.validate(id)
              }
              className="form-control"
              style={getEditorStyle(context.errors)}
            />
          )}

          {editor!.toLowerCase() === "multilinetextbox" && (
            <textarea
              id={id}
              value={value}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={(e: React.FormEvent<HTMLTextAreaElement>) =>
                context.validate(id)
              }
              className="form-control"
              style={getEditorStyle(context.errors)}
            />
          )}

          {editor!.toLowerCase() === "dropdown" && (
            <select
              id={id}
              name={id}
              value={value}
              onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={(e: React.FormEvent<HTMLSelectElement>) =>
                context.validate(id)
              }
              className="form-control"
              style={getEditorStyle(context.errors)}
            >
              {options &&
                options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}

              {editor!.toLowerCase() === "datebox" && (
                <input
                  type="date"
                  id={id}
                  value={value || ""}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    context.setValues({ [id]: e.currentTarget.value })
                  }
                  onBlur={(e: React.FormEvent<HTMLInputElement>) =>
                    context.validate(id)
                  }
                  className="form-control"
                  style={getEditorStyle(context.errors)}
                />
              )}
            </select>
          )}
          {getError(context.errors) && (
            <div style={{ color: "red", fontSize: "80%" }}>
              <p>{getError(context.errors)}</p>
            </div>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
};
Field.defaultProps = {
  editor: "textbox"
};

export default Field;
