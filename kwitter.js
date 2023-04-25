function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
window.location="kwitter_room.html";


}
var firebaseConfig = {
    apiKey: "AIzaSyDwOsFlZJMoy5-JbDG8appoeFP5EEFVmvE",
    authDomain: "kwitterchitra.firebaseapp.com",
    databaseURL: "https://kwitterchitra-default-rtdb.firebaseio.com",
    projectId: "kwitterchitra",
    storageBucket: "kwitterchitra.appspot.com",
    messagingSenderId: "869950038563",
    appId: "1:869950038563:web:bf53a11cb289462e2fc796"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);