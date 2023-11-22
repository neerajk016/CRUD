import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqR0G6qfhznrIeeQ8BeDl4DUsXFUimPpI",
  authDomain: "crud1-46b44.firebaseapp.com",
  databaseURL: "https://crud1-46b44-default-rtdb.firebaseio.com",
  projectId: "crud1-46b44",
  storageBucket: "crud1-46b44.appspot.com",
  messagingSenderId: "147284166194",
  appId: "1:147284166194:web:dbd583e29a7306fa4c9e2b"
};

const app = initializeApp(firebaseConfig);
const firebaseDB = getDatabase(app);
export default firebaseDB;


