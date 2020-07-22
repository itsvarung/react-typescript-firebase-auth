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
  addressDetails = "addressDetails",
  primeDetails = "primeDetails",
}

export interface FormField {
  label: string;
  helperText: string;
  inputType: BasicDetailsInputType | AddressDetailsInputType | PrimeInputType;
}

export enum BasicDetailsInputType {
  firstname = "firstname",
  lastname = "lastname",
  phone = "phone",
  email = "email",
  dob = "dob",
  password = "password",
}

export enum AddressDetailsInputType {
  address = "address",
  city = "city",
  postcode = "postcode",
}

export enum PrimeInputType {
  subPeriod = "subPeriod",
}

export function getInputTypeEnumForTypeOfData(typeOfData: TypeOfData) {
  switch (typeOfData) {
    case TypeOfData.basicDetails:
      return BasicDetailsInputType;
    case TypeOfData.addressDetails:
      return BasicDetailsInputType;
    case TypeOfData.primeDetails:
      return BasicDetailsInputType;
  }
}
