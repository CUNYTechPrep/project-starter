import firebase from 'firebase/app';
import 'firebase/storage'
import firebaseConfig from './firebaseConfig.json';


firebase.initializeApp(firebaseConfig);

export default firebase;