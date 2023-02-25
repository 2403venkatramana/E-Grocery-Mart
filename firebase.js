import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChw5cm4z2ain5LYtjrImv98HkkXKvdKNc",
    authDomain: "clgproject-f2435.firebaseapp.com",
    projectId: "clgproject-f2435",
    storageBucket: "clgproject-f2435.appspot.com",
    messagingSenderId: "255238047268",
    appId: "1:255238047268:web:bd42c67c52d6aa6227fab1",
    measurementId: "G-9PCEHXYXHG"
  // apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
  // authDomain: "challenge-4b2b2.firebaseapp.com",
  // databaseURL: "https://challenge-4b2b2.firebaseio.com",
  // projectId: "challenge-4b2b2",
  // storageBucket: "challenge-4b2b2.appspot.com",
  // messagingSenderId: "962418448875",
  // appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };