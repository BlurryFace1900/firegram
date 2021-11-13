import {
  initializeApp,
  storage,
  firestore
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
//import * as firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0DqGjZ5skMYt1Obd1mEAJ0kp64oq4RE4",
  authDomain: "ninja-firegram-497b4.firebaseapp.com",
  projectId: "ninja-firegram-497b4",
  storageBucket: "ninja-firegram-497b4.appspot.com",
  messagingSenderId: "171752266246",
  appId: "1:171752266246:web:6be4676dc11a3be68e8187"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const projectStorage = storage();
const projectFirestore = firestore();

export { projectFirestore, projectStorage };
