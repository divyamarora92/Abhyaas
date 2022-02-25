const studentReference = firebase.firestore().collection('students');
const subjects = firebase.firestore().collection('subjects');
const teacherReference = firebase.firestore().collection('teachers');
const title = document.getElementById('title');
const subjectTitle = document.getElementById('subjectTitle');
var uniqueId;
var teacherId;


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     uniqueId = user.uid
    } 
  });

studentReference.onSnapshot(snapshot => {
    
    snapshot.forEach(doc => {

        console.log(doc.data().name);
        if(doc.id === uniqueId){
        console.log(doc.data().name);
        renderName(doc.data().name);
        }
    })
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     teacherId = user.uid
    } 
  });

teacherReference.onSnapshot(snapshot => {
    
    snapshot.forEach(doc => {
        if(doc.id === teacherId){

        console.log(doc.data().name)
        renderName(doc.data().name);
        }
    })
})

function renderName(lname){
    let name = "Welcome " + lname+ "!"
    title.innerText = name;
}





//signout 

function signOut(){
    firebase.auth().signOut()
        .then(() => {
          console.log('signed out')
          window.location.href = "index.html";
        });

  }

  

