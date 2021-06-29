import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBqKMTdLMd1i8TqNLNN6scSu5jhwcFBf9c",
  authDomain: "pandello-e30e0.firebaseapp.com",
  projectId: "pandello-e30e0",
  storageBucket: "pandello-e30e0.appspot.com",
  messagingSenderId: "832442329382",
  appId: "1:832442329382:web:ec269b55f7678d58fab9e7"
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;