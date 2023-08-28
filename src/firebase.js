import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfHegdr5lYn8CG_WCrioRksoCAdoZt-XM",
    authDomain: "netflix-clone-1-6cc66.firebaseapp.com",
    projectId: "netflix-clone-1-6cc66",
    storageBucket: "netflix-clone-1-6cc66.appspot.com",
    messagingSenderId: "170022121590",
    appId: "1:170022121590:web:810e38e2fc6b4ab313ef57"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;