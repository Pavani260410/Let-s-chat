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


function load() {
    namme = localStorage.getItem("name");
    document.getElementById("hello").innerHTML = "Welcome " + namme + "!";
    code = localStorage.getItem('roomcode');
    document.getElementById('rooms').innerHTML = code;

}

function logout() {
    window.location = "index.html";
}

function addroom() {
    roomname = document.getElementById("roomname").value;
    console.log(roomname);
    firebase.database().ref("/").child(roomname).update({
        Roomname: roomname
    });
    localStorage.setItem("roomname", roomname);
    document.getElementById('roomname').value = "";
}

function getdata() {
    firebase.database().ref('/').on('value', function (snapshot) {
        document.getElementById('rooms').innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            room_names = childKey;
            console.log("Room Name - " + room_names);
            row = "<div class='room_name' id='" + room_names + "' onclick='redirect(this.id)'>" + room_names + "</div><hr>";
            document.getElementById("rooms").innerHTML += row;
        });
    });
}

getdata();
