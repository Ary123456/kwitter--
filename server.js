var firebaseConfig = {
    apiKey: "AIzaSyAAa1lYSMoo_h8AiZa97jQgZG-ynP2oZoQ",
    authDomain: "kwitter-app-4e786.firebaseapp.com",
    databaseURL: "https://kwitter-app-4e786-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-4e786",
    storageBucket: "kwitter-app-4e786.appspot.com",
    messagingSenderId: "148101010007",
    appId: "1:148101010007:web:1a0e3f8ac6691cf0160912"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("out_put").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            row = "<div class='roomname' id=" + Room_names + " onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Start code

            //End code

        });
    });

}



getData();
function addRoom() {
    room_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("roomname", room_name);
    window.location = "page.html";

}
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("out_put");
    window.location = "index.html";
}


