import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";
import { Form } from "../models/Form";

const config = {
  apiKey: "AIzaSyCRsG_xSX6F4AZqbyivHpC8AxoNVvIoP60",
  authDomain: "project-una-20a13.firebaseapp.com",
  databaseURL: "https://project-una-20a13.firebaseio.com",
  projectId: "project-una-20a13",
  storageBucket: "project-una-20a13.appspot.com",
  messagingSenderId: "258286949655",
  appId: "1:258286949655:web:0122f7c531672d13699352",
  measurementId: "G-69BSZT8DTC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

// login the user
// Parameters:
//  - Email: the email address of the user
//  - Password: the users password
export function login(username: string, password: string) {
  return auth.signInWithEmailAndPassword(username, password);
}

// logout logs the user out
export function logout() {
  return auth.signOut();
}

// Sign Up the user to the website
// Parameters:
//  -firstname: users first name
//  - username: desired users username
//  - password: desired password of the user
export async function signUp(
  firstname: string,
  username: string,
  password: string
) {
  await auth.createUserWithEmailAndPassword(username, password);
  if (auth.currentUser) {
    await auth.currentUser.updateProfile({
      displayName: firstname,
    });
  }
}

// Password Reset
export const doPasswordReset = (email: string) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password: string) => {
  if (auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
  throw Error("No auth.currentUser!");
};

// Get Users first name
export const getCurrentFirstname = () =>
  auth.currentUser && auth.currentUser.displayName;

//   // gets all data from collection
export async function getForms() {
  // const snapshot = await db.collection("forms").get();
  // const docData = snapshot.docs.map((doc) => doc.data());
  // const forms: Form[] = docData[0].data();
  // console.log(forms);

  db.collection("forms")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        const form: Form = {
          title: data.title,
          description: data.description,
          cardColor: data.cardColor,
          formSections: data.formSections,
          id: data.id,
          progress: data.progress,
          url: data.url,
        };
        console.log(form);
        // console.log(doc.id, " => ", doc.data());
      });
    });
}

// (async function test() {

// 	try {

// 		var bennadel: firebase.database.Reference = db.ref( "testing/ben-nadel" );

// 		await bennadel.set({
// 			name: "Ben Nadel",
// 			passions: [ "JavaScript", "TypeScript", "Angular", "ColdFusion", "UX" ]
// 		});

// 		var bennadelSnapshot: firebase.database.DataSnapshot = await bennadel.once( "value" );

// 		console.log( "Firebase Ref Value:" );
// 		console.dir( bennadelSnapshot.val() );

// 	} catch ( error ) {

// 		console.log( "Error!" );
// 		console.log( error );

// 	}

// })();
