import * as firebase from "firebase";

const DBinit = () => {
  try {
    const firebaseConfig = {
      apiKey: "AIzaSyDg2xsToiY_G7ljG0H2dheTSghLwvB9EKA",
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  } catch (err) {
    console.log(err);
  }

  return firebase;
};

export default DBinit;
