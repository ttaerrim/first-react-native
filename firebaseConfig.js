import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5tLGZGDORo5lNe6Csq_sr9e-LVO4pF7o",
  authDomain: "sparta-myhoneytip-ttaerrim.firebaseapp.com",
  databaseURL:
    "https://sparta-myhoneytip-ttaerrim-default-rtdb.firebaseio.com/",
  projectId: "sparta-myhoneytip-ttaerrim",
  storageBucket: "sparta-myhoneytip-ttaerrim.appspot.com",
  messagingSenderId: "336590243547",
  appId: "1:336590243547:web:665dd80a23f678a68b6efe",
  measurementId: "G-MZTQBGBSC0",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
