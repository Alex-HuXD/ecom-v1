import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0XgarDr-wKU_Tns2G8y6Oy7p2XisRWuc",
  authDomain: "ecommerce-v1-2397b.firebaseapp.com",
  projectId: "ecommerce-v1-2397b",
  storageBucket: "ecommerce-v1-2397b.appspot.com",
  messagingSenderId: "952526333660",
  appId: "1:952526333660:web:747bf6771c7e012721b619",
  measurementId: "G-R4X45YGTG9",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
