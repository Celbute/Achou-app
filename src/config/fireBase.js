import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB8YCrvzttYf8zmwE8mm2IqoxW8U8Ljctk",
    authDomain: "achou-app-dbd57.firebaseapp.com",
    projectId: "achou-app-dbd57",
    storageBucket: "achou-app-dbd57.appspot.com",
    messagingSenderId: "413753898602",
    appId: "1:413753898602:web:f994fad26156d9fd23fc13"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

  export default firebase;