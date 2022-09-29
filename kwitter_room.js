const firebaseConfig = {
      apiKey: "AIzaSyAhifvjPPNhZXSjW8wsIt7XBlljc3MFNNw",
      authDomain: "kwitter-a4a81.firebaseapp.com",
      databaseURL: "https://kwitter-a4a81-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4a81",
      storageBucket: "kwitter-a4a81.appspot.com",
      messagingSenderId: "960940668636",
      appId: "1:960940668636:web:7127114da2fcffe578e619"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html"
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}