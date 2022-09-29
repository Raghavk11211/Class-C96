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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
