const uploader = document.getElementById("uploader");

// var file = e.target.files[0];
// var storageRef = firebase.storage().ref('assignments/' + file.name);

uploader.addEventListener("change", function (e) {
  // get the file
  var file = e.target.files[0];

  var storageRef = firebase.storage().ref("assignments/" + file.name);
  storageRef.put(file);
});

function show() {
  alert("File Uploaded");
}
function reset() {
  return window.location.assign("assign_sub.html");
}
