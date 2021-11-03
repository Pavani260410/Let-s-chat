var firebaseConfig = {
    apiKey: "AIzaSyDlmyxfiN7E7rjSYGfH25P2GLDTeLbp-40",
    authDomain: "let-s-chat-769d6.firebaseapp.com",
    databaseURL: "https://let-s-chat-769d6-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-769d6",
    storageBucket: "let-s-chat-769d6.appspot.com",
    messagingSenderId: "662790615739",
    appId: "1:662790615739:web:bbb0b16a44c957b7b6af9e",
    measurementId: "G-7Z29ZCZR2H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//add user

function addUser() {
    namee = document.getElementById('name').value;
    firebase.database().ref("/").child(namee).update({
        name: namee
    });
    localStorage.setItem("name", namee);
    window.location = "home.html";
}
