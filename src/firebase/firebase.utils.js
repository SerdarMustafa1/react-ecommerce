import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC74aN_t5FXhcpLtUp_yVI6RAVnh5Sh2po',
  authDomain: 'react-ecommerce-33147.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-33147.firebaseio.com',
  projectId: 'react-ecommerce-33147',
  storageBucket: 'react-ecommerce-33147.appspot.com',
  messagingSenderId: '687279695136',
  appId: '1:687279695136:web:1ab4ef1541c59ae5486345',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

// firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
