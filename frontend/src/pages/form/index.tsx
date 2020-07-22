import React from "react";
import NavBar from "../../components/nav-bar";
import * as Styles from "./styles";
import * as Form from "../../models/Form";
import * as User from "../../models/User";
import FormSection from "../../components/form/form-section";
import FormStepper from "../../components/form/stepper";
import FormNavigation from "../../components/form/navigation-buttons";
import { getCurrentFirstname, getForm } from "../../services/firebase";
import "firebase/auth";
import "firebase/firestore";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../../components/homepage/loading";

interface Props {
  form: Form.Form;
  user: User.User;
}

const defaultForm = {
  title: "",
  description: "",
  formSections: [],
  id: 11111,
  url: "",
  cardColor: "",
  progress: 0,
};

// Render the form page
// Parameters:
//  - form: the form you want to render which contains information about the different form sections and questions
//  - user: the current data we have on the user
const FormPage: React.FC<Props> = (props) => {
  const { id } = useParams();

  //Current user object
  const [userDataState, updateUserDataState] = React.useState(newUser);

  //Current active form section that is visible on screen
  const [activeSection, setActiveSection] = React.useState(0);

  const [form, setForm] = React.useState<Form.Form>(defaultForm);

  React.useEffect(() => {
    fetchForm();
  }, []);

  async function fetchForm() {
    if (id) {
      const data = await getForm(id);
      console.log(data);
      console.log(data.formSections);
      // if (data.formSections !== undefined) {
      //   console.log(data);
      //   console.log(data.formSections);
      // }
      setForm(data);
    }
  }

  //Iterates the stepper and shows the next page
  const handleNext = () => {
    setActiveSection((prevActiveStep) => prevActiveStep + 1);
  };

  //De-iterates the stepper Goes back a page
  const handleBack = () => {
    setActiveSection((prevActiveStep) => prevActiveStep - 1);
  };

  //Handles submitting of the form when the form reaches the final page
  const handleSubmit = () => {
    setActiveSection(0);
  };

  //Handles any changes to form values
  const handleInputChange = (
    inputType:
      | Form.BasicDetailsInputType
      | Form.AddressDetailsInputType
      | Form.PrimeInputType,
    e: React.ChangeEvent<any>
  ) => {
    //Get the current User Details Section that is being updated and update it with the new values
    const currentSectionOfUserDataBeingUpdated =
      userDataState[form.formSections[activeSection].typeOfData];
    // currentSectionOfUserDataBeingUpdated[inputType] = e.target.value;

    //Update state with updated user details section
    updateUserDataState({
      ...userDataState,
      [form.formSections[activeSection].typeOfData]: User.updateUserDataType(
        e.target.value,
        form.formSections[activeSection].typeOfData,
        currentSectionOfUserDataBeingUpdated,
        inputType
      ),
    });
  };

  return form.formSections.length != 0 ? (
    <React.Fragment>
      <NavBar firstname={getCurrentFirstname() || "stranger"} />
      <Styles.MainWrapper>
        <Styles.CenteredWrapper>
          <FormStepper
            activeSection={activeSection}
            formSections={form.formSections}
          />

          <FormSection
            user={userDataState}
            formSection={form.formSections[activeSection]}
            handleChange={handleInputChange}
          />

          <FormNavigation
            activeSection={activeSection}
            numberOfFormSections={form.formSections.length}
            handleBack={handleBack}
            handleNext={handleNext}
            handleSubmit={handleSubmit}
          />
        </Styles.CenteredWrapper>
      </Styles.MainWrapper>
    </React.Fragment>
  ) : (
    <CircularIndeterminate />
  );
};

export default FormPage;

var basicDetails: User.BasicDetails = {
  firstname: "Varun",
  lastname: "",
  email: "reach",
  address: "",
  phone: "019312",
  dob: "",
  password: "",
};

var primeDetails: User.PrimeDetails = {
  subPeriod: "",
};
var addressDetails: User.AddressDetails = {
  address: "",
  city: "",
  postcode: "",
};
var newUser: User.User = {
  basicDetails: basicDetails,
  primeDetails: primeDetails,
  addressDetails: addressDetails,
};
