import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_tyQDAn5ndeeNdItsF3xbnpW3KyNSrvE",
  authDomain: "jilver-react-gallery.firebaseapp.com",
  projectId: "jilver-react-gallery",
  storageBucket: "jilver-react-gallery.appspot.com",
  messagingSenderId: "37618942204",
  appId: "1:37618942204:web:324140ae8f6d2a08765779",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
