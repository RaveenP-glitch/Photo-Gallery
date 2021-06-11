import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxgH8zXfwhLw9p6QnxmK2DfVpbp2aIJGs",
    authDomain: "ninja-firegram-be2ec.firebaseapp.com",
    projectId: "ninja-firegram-be2ec",
    storageBucket: "ninja-firegram-be2ec.appspot.com",
    messagingSenderId: "527933342364",
    appId: "1:527933342364:web:43996e7b01a8554271e359"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export{ projectStorage, projectFirestore };

  