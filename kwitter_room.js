var firebaseConfig = {
      apiKey: "AIzaSyB7G3izGBg-ukT4wHreQNqfrlfirpGVctQ",
      authDomain: "kwitter-app-67c8c.firebaseapp.com",
      databaseURL: "https://kwitter-app-67c8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-67c8c",
      storageBucket: "kwitter-app-67c8c.appspot.com",
      messagingSenderId: "119596725444",
      appId: "1:119596725444:web:52106db2eb3f43180bc591"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      window.location = "index.html";
};
