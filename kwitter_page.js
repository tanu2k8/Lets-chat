//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCd2ZhJdeDtvP5fTh5bLqw2XpjrPnM0swM",
      authDomain: "let-s-chat-ced45.firebaseapp.com",
      databaseURL: "https://let-s-chat-ced45-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-ced45",
      storageBucket: "let-s-chat-ced45.appspot.com",
      messagingSenderId: "761734872310",
      appId: "1:761734872310:web:cff164a3ee7de97c18c0d7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
