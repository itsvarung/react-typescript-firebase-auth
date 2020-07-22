import * as Form from "./Form";

export interface User {
  basicDetails: BasicDetails;
  addressDetails: AddressDetails;
  primeDetails: PrimeDetails;
}

export interface BasicDetails {
  firstname: string;
  lastname: string;
  dob: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}

export interface AddressDetails {
  address: string;
  city: string;
  postcode: string;
}

export interface PrimeDetails {
  subPeriod: string;
}

export function getValueFromUserAttribute(
  userDataType: BasicDetails | AddressDetails | PrimeDetails,
  typeOfData: Form.TypeOfData,
  inputType:
    | Form.BasicDetailsInputType
    | Form.AddressDetailsInputType
    | Form.PrimeInputType
) {
  switch (typeOfData) {
    case Form.TypeOfData.basicDetails:
      const basicDetails = userDataType as BasicDetails;
      const bdinput = inputType as Form.BasicDetailsInputType;
      return basicDetails[bdinput];
    case Form.TypeOfData.addressDetails:
      const addressDetails = userDataType as AddressDetails;
      const adinput = inputType as Form.AddressDetailsInputType;
      return addressDetails[adinput];

    case Form.TypeOfData.primeDetails:
      const primeDetails = userDataType as PrimeDetails;
      const pdinput = inputType as Form.PrimeInputType;
      return primeDetails[pdinput];
  }
}

// Update a specified section of user data with a new value
// Parameters:
//  - value: the value you want to update an attribute with
//  - typeOfData: the type of form data you are updating
//  - userData: the section of user data you are trying to update
//  - input type: the type of value you are trying to update
export function updateUserDataType(
  value: any,
  typeOfData: Form.TypeOfData,
  userDataType: BasicDetails | AddressDetails | PrimeDetails,
  inputType:
    | Form.BasicDetailsInputType
    | Form.AddressDetailsInputType
    | Form.PrimeInputType
) {
  switch (typeOfData) {
    case Form.TypeOfData.basicDetails:
      var updatedBD = userDataType as BasicDetails;
      const bdinput = inputType as Form.BasicDetailsInputType;
      updatedBD[bdinput] = value;
      return updatedBD;
    case Form.TypeOfData.addressDetails:
      var updatedAD = userDataType as AddressDetails;
      const adinput = inputType as Form.AddressDetailsInputType;
      updatedAD[adinput] = value;
      return updatedAD;
    case Form.TypeOfData.primeDetails:
      var updatedPD = userDataType as PrimeDetails;
      const pdinput = inputType as Form.PrimeInputType;
      updatedPD[pdinput] = value;
      return updatedPD;
  }
}
