// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPIDs
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;










// Your web app's Firebase configuration
// const firebaseConfig = {
// Previews
//   apiKey: "AIzaSyCLQYdER2E_gpSLhMmuKsnmQP201UzKIyU",
//   authDomain: "restaurt-client-side.firebaseapp.com",
//   projectId: "restaurt-client-side",
//   storageBucket: "restaurt-client-side.appspot.com",
//   messagingSenderId: "627309586373",
//   appId: "1:627309586373:web:d6390af79b7ae0a9a28dac"
// };