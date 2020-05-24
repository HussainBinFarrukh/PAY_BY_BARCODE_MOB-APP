// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCORP8H81w0j589Xl6sgKCrxOP5EYLK4r0",
    authDomain: "pay-by-barcode-42595.firebaseapp.com",
    databaseURL: "https://pay-by-barcode-42595.firebaseio.com",
    projectId: "pay-by-barcode-42595",
    storageBucket: "pay-by-barcode-42595.appspot.com",
    messagingSenderId: "370842837077",
    appId: "1:370842837077:web:52e5ce639eadc68713b4dc",
    measurementId: "G-3Y472N19YY"
};




firebase.initializeApp(firebaseConfig);

export default firebase;