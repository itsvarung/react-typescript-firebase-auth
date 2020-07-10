export interface User {
  basicDetails: BasicDetails;
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
