import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRsG_xSX6F4AZqbyivHpC8AxoNVvIoP60",
  authDomain: "project-una-20a13.firebaseapp.com",
  databaseURL: "https://project-una-20a13.firebaseio.com",
  projectId: "project-una-20a13",
  storageBucket: "project-una-20a13.appspot.com",
  messagingSenderId: "258286949655",
  appId: "1:258286949655:web:0122f7c531672d13699352",
  measurementId: "G-69BSZT8DTC",
};

// class to allow communication with firebase for login, logout and registration of user
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore;
  }

  // login should take two string arguments
  login(username, password) {
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  // logout logs the user out (wow)
  logout() {
    return this.auth.signOut();
  }

  async register(firstname, lastname, username, password) {
    await this.auth.createUserWithEmailAndPassword(username, password);
    return this.auth.currentUser.updateProfile({
      displayName: firstname,
      lastname: lastname,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentFirstname() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
