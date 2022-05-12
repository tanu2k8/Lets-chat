
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBRdqAi9juCnIiuttXJaZNlzswaMn8Q1UM",
      authDomain: "kwitter-e7c9a.firebaseapp.com",
      databaseURL: "https://kwitter-e7c9a-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7c9a",
      storageBucket: "kwitter-e7c9a.appspot.com",
      messagingSenderId: "277148106414",
      appId: "1:277148106414:web:ad60006bed37959f4c373f"
    };
    
    // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome  "+ user_name+" !";
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}