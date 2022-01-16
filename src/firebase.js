import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBHdYzi0YhlcSEeNs7pj08pOjOCWKmk-hI",
  authDomain: "twitter-clone-8ba6f.firebaseapp.com",
  projectId: "twitter-clone-8ba6f",
  storageBucket: "twitter-clone-8ba6f.appspot.com",
  messagingSenderId: "623056163902",
  appId: "1:623056163902:web:0068108610479c9cbd6d6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;