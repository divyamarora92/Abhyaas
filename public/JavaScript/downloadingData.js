const download = document.getElementById("download");

var storageRef = firebase.storage().ref("Notes/Unit-1.pdf");

// Get the download URL
storageRef
  .getDownloadURL()
  .then(function (url) {
    // Insert url into an <img> tag to "download"
    download.href = url;
    console.log(url);
  })
  .catch(function (error) {
    console.log(error);
  });
