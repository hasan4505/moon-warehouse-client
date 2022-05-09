// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgCG62kcFfV4krGGqf0m01bsFe497QTfc",
  authDomain: "my-warehouse-73e69.firebaseapp.com",
  projectId: "my-warehouse-73e69",
  storageBucket: "my-warehouse-73e69.appspot.com",
  messagingSenderId: "527583888621",
  appId: "1:527583888621:web:b7a6ca52d8497c0eee38e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
