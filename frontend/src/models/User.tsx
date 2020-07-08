export interface User {
  basicDetails: BasicDetails;
}

export interface BasicDetails {
  firstname: string;
  lastname: string;
  dob: string;
  mobile: string;
  address: string;
  email: string;
}
