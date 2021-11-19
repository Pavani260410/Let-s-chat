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

function logout() {
    window.location = "index.html";
    localStorage.removeItem("roomname");
    localStorage.removeItem("name");

}

function send() {
    msg = document.getElementById('msg').value;
    room_name = localStorage.getItem("room_name");
    console.log(room_name);
    user_name = localStorage.getItem("name");

    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    });
    document.getElementById("msg").value = "";
    console.log("yeppp!!");
}
