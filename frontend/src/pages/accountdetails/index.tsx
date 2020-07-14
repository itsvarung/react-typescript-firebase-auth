import React, { useState, useEffect } from "react";
import NavBar from "../../components/nav-bar";
import HeaderLoading from "../../components/accountdetails/headerloading";
import HeaderLoggedOut from "../../components/accountdetails/headerloggedout";
import Section from "../../components/accountdetails/section";
import * as Styles from "./styles";
import { getCurrentFirstname } from "../../services/firebase";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

interface Props {}

const AccountDetails: React.FC<Props> = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const theName = getCurrentFirstname();
    theName ? setName(theName) : setName("");
    setLoading(false);
  }, []);

  const history = useHistory();

  const handleSignIn = () => {
    history.push("/login");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return name ? (
    // If user is logged in show them:
    <React.Fragment>
      <NavBar firstname={getCurrentFirstname() || "stranger"} />
    </React.Fragment>
  ) : (
    // If user is not logged in show them a log in screen
    <React.Fragment>
      <NavBar firstname={"stranger"} />
      <Styles.MainWrapper>
        <HeaderLoggedOut />
      </Styles.MainWrapper>
    </React.Fragment>
  );
};

export default AccountDetails;
