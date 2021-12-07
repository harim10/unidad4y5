import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMjJrOqMq4gzostg_UYa0_FyFkspl4nA",
  authDomain: "dwapp9-a107a.firebaseapp.com",
  projectId: "dwapp9-a107a",
  storageBucket: "dwapp9-a107a.appspot.com",
  messagingSenderId: "360650276216",
  appId: "1:360650276216:web:ddcf1e14795f18b743dc8d"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

//Creamos dos constante que exportamos como un objeto
const db = app.firestore()
const auth = app.auth()

export {db, auth}
