import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_2dTg_ciOjlSsHa5mrXQc2KRa7rTLtTc",
  authDomain: "react-ecommerce-300af.firebaseapp.com",
  databaseURL: "https://react-ecommerce-300af.firebaseio.com",
  projectId: "react-ecommerce-300af",
  storageBucket: "react-ecommerce-300af.appspot.com",
  messagingSenderId: "770288764424",
  appId: "1:770288764424:web:2d3e33fa29e72fe17a73bd",
  measurementId: "G-G96YHDX0PD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.collection("users").doc(userAuth.uid);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error("Error Creating User", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
