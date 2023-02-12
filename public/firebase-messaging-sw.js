importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCz38-aKgdBU6e5EHOcNt6Xb2raD1JYGlI",
    authDomain: "toeic-frontend.firebaseapp.com",
    projectId: "toeic-frontend",
    storageBucket: "toeic-frontend.appspot.com",
    messagingSenderId: "1020915434799",
    appId: "1:1020915434799:web:b78f5d68da768ea4cf4dda",
    measurementId: "G-BQ83NQ3BDS"
  });

const messaging = firebase.messaging();