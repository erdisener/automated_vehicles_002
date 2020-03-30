// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAB_RziTrA7lPfAPOGNhNHJ9U0scOrsPTE",
  authDomain: "automatedvehicles-83143.firebaseapp.com",
  databaseURL: "https://automatedvehicles-83143.firebaseio.com",
  projectId: "automatedvehicles-83143",
  storageBucket: "automatedvehicles-83143.appspot.com",
  messagingSenderId: "531632852771",
  appId: "1:531632852771:web:cc2a003d0ffb7cd1594696"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referance requests collection
var messagesRef = firebase.database().ref("requests");

// Listen for form save button
document.getElementById("result").addEventListener("click", saveForm);

function saveForm(e) {
  e.preventDefault();
  var km = $("#in_kilo").text();
  var demand = $("#duration_text").text();
  var demand_second = $("#duration_value").text();
  var origin = $("#from").text();
  var fromlatlng = $("#fromlatlng").text();
  var destination = $("#to").text();
  var tolatlng = $("#tolatlng").text();
  var earliest = getInputVal("earliest");
  var latest = getInputVal("latest");

  // Reset orijin and destination text area after submit
  document.getElementById("distance_form").reset();

  // Save message
  saveMessage(
    km,
    demand,
    demand_second,
    origin,
    fromlatlng,
    destination,
    tolatlng,
    earliest,
    latest
  );

  //Show alert
  document.querySelector(".alert").style.display = "block";

  //Hide alert after 3 sec.
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  // Save message to firebase
  function saveMessage(
    km,
    demand,
    demand_second,
    origin,
    fromlatlng,
    destination,
    tolatlng,
    earliest,
    latest
  ) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      distance_km: km,
      demand_time_text: demand,
      demand_time_seconds: demand_second,
      origin: origin,
      origin_lat_lng: fromlatlng,
      destination: destination,
      destination_lat_lng: tolatlng,
      earliest_picking_time: earliest,
      latest_picking_time: latest
    });
  }
}

function getInputVal(id) {
  return document.getElementById(id).value;
}
