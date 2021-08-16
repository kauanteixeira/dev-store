// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAGE4jKDgM4lYqSPEFhqD8kShDzhFtT8Q",
    authDomain: "my-store-209b2.firebaseapp.com",
    projectId: "my-store-209b2",
    storageBucket: "my-store-209b2.appspot.com",
    messagingSenderId: "245841574334",
    appId: "1:245841574334:web:7acf75959d5141642de1ef"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let auth = firebase.auth()
const email = document.getElementById('inputEmail')
const senha = document.getElementById('inputSenha')


function login() {
    auth.signInWithEmailAndPassword(email.value, senha.value).then(user => {
        window.location.replace('index.html')
    }).catch(erro => {
        console.log("Usuário não registrado", erro)   
    })
    
}

