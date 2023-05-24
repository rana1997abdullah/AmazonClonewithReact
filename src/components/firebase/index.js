// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADgo89I3O1xn8XQ3vZaqRPGN3GX-a6ydM",
  authDomain: "finalreactecommerce.firebaseapp.com",
  databaseURL:
    "https://finalreactecommerce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "finalreactecommerce",
  storageBucket: "finalreactecommerce.appspot.com",
  messagingSenderId: "745251563688",
  appId: "1:745251563688:web:7f0aeb781b7464a78ffa9d",
  measurementId: "G-L9RK0DM70L",
};
// export const auth = getAuth(app);
// export const database = getDatabase(app)
// export default app;
export const StartAuth = () => {
  const app = initializeApp(firebaseConfig);
  return getAuth(app);
};
export const StartFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
};
export default StartFirebase;
