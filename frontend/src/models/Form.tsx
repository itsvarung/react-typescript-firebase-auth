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
  typeOfData: TypeOfData;
  title: string;
  subtitle: string;
  fields: FormField[];
}

export enum TypeOfData {
  basicDetails = "basicDetails",
}

export interface FormField {
  label: string;
  helperText: string;
  inputType: InputType;
}

export enum InputType {
  firstname = "firstname",
  lastname = "lastname",
  mobile = "mobile",
  email = "email",
  dob = "dob",
  address = "address",
}
