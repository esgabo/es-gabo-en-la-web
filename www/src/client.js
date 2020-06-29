import * as sapper from '@sapper/app';
import { firebaseConfig } from './firebase.cfg';
import firebase from 'firebase';

let app = firebase.initializeApp(firebaseConfig);
window.firestore = app.firestore();

sapper.start({
	target: document.querySelector('#sapper')
});