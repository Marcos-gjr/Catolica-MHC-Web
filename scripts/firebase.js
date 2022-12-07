import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, query, where, collection, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

let email = document.getElementById("form-email");
let password = document.getElementById("form-senha");
let btnLogin = document.getElementById("login-entrar");

const firebaseConfig = {
  apiKey: "AIzaSyBXeSDYb0o2azQfHTB2CjYOrYcqPzaYOpQ",
  authDomain: "catolica-mhc-database.firebaseapp.com",
  projectId: "catolica-mhc-database",
  storageBucket: "catolica-mhc-database.appspot.com",
  messagingSenderId: "407547194289",
  appId: "1:407547194289:web:b05053a2b4cb2d83cdeb90"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "adm_mhc", "SZIcdBWNycOXFGdznSkZ");
const docSnap = await getDoc(docRef);

btnLogin.addEventListener("click", function () {

if(docSnap.get('emailAdm') == email.value && docSnap.get('senhaAdm') == password.value){
  window.location.href = 'dashboard.html';
}else{
  alert("Email ou senha incorretos!");
} 

})