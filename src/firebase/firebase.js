// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore,
    initializeFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getStorage
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlZ85t53jWiubQSoeCgY1tYnIiCrqptBc",
    authDomain: "ton-wallet-423f5.firebaseapp.com",
    projectId: "ton-wallet-423f5",
    storageBucket: "ton-wallet-423f5.appspot.com",
    messagingSenderId: "911223981857",
    appId: "1:911223981857:web:233b7453f8d54f668e2060"
};

const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}