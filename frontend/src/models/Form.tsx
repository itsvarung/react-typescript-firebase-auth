export interface Form {
  id: number;
  title: string;
  description: string;
  cardColor: string;
  url: string;
  progress: number;
  formSections: FormSection[];
}

export interface FormSection {
  title: string;
  subtitle: string;
  fields: FormField[];
}

export interface FormField {
  label: string;
  helperText: string;
  inputType: InputType;
}

export enum InputType {
  FIRSTNAME = "firstname",
  LASTNAME = "lastname",
  PHONENUMBER = "mobile",
  EMAIL = "email",
  DOB = "dob",
  ADDRESS = "address",
  NONE = "off",
}
