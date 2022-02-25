const studentRegisterForm = document.querySelector(".studentRegister");
const studentLoginForm = document.querySelector(".studentLogin");

const teacherRegisterForm = document.querySelector(".teacherRegister");
const teacherLoginForm = document.querySelector(".teacherLogin");
var msg = "Username or Password Incorrect";

// student register form
studentRegisterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = studentRegisterForm.email.value;
  const password = studentRegisterForm.password.value;
  const repassword = studentRegisterForm.repassword.value;
  const fname = studentRegisterForm.firstname.value;
  const lname = studentRegisterForm.lastname.value;
  const name = fname + " " + lname;

  if (password !== repassword) {
    studentRegisterForm.querySelector(".error").textContent =
      "Password does not match";
  }

  if (password.length < 6) {
    studentRegisterForm.querySelector(".error").textContent =
      "Password should not be less than 6 characters";
  }
  //user firebase using the appropriate firebase method
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      //Once the user creation has happened successfully, we can add the currentUser into firestore
      //with the appropriate details.
      firebase
        .firestore()
        .collection("students")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
          email: email,
        })
        .then(() => (window.location.href = "index.html"))
        //ensure we catch any errors at this stage to advise us if something does go wrong
        .catch((error) => {
          console.log(
            "Something went wrong with added user to firestore: ",
            error
          );
        });
    })
    //we need to catch the whole sign up process if it fails too.
    .catch((error) => {
      console.log("Something went wrong with sign up: ", error);
    });
});

// studentlogin form
studentLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = studentLoginForm.email.value;
  const password = studentLoginForm.password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("logged in", user);
      studentLoginForm.reset();
      window.location.href = "home.html";
    })
    .catch((error) => {
      studentLoginForm.querySelector(".error").textContent = msg;
    });
});

// teacher register form
teacherRegisterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = teacherRegisterForm.email2.value;
  const password = teacherRegisterForm.password2.value;
  const repassword = teacherRegisterForm.repassword2.value;
  const fname = teacherRegisterForm.firstname2.value;
  const lname = teacherRegisterForm.lastname2.value;
  const name = fname + " " + lname;

  if (password !== repassword) {
    teacherRegisterForm.querySelector(".error").textContent =
      "Password does not match";
  }

  if (password.length < 6) {
    teacherRegisterForm.querySelector(".error").textContent =
      "Password should not be less than 6 characters";
  }
  //user firebase using the appropriate firebase method
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      //Once the user creation has happened successfully, we can add the currentUser into firestore
      //with the appropriate details.
      firebase
        .firestore()
        .collection("teachers")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
          email: email,
        })
        .then(() => (window.location.href = "index.html"))
        //ensure we catch any errors at this stage to advise us if something does go wrong
        .catch((error) => {
          console.log(
            "Something went wrong with added user to firestore: ",
            error
          );
        });
    })
    //we need to catch the whole sign up process if it fails too.
    .catch((error) => {
      console.log("Something went wrong with sign up: ", error);
    });
});

// teacherlogin form
teacherLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = teacherLoginForm.email2.value;
  const password = teacherLoginForm.password2.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("logged in", user);
      studentLoginForm.reset();
      window.location.href = "faculty.html";
    })
    .catch((error) => {
      studentLoginForm.querySelector(".error").textContent = msg;
    });
});

// checking if already logged in

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//      window.location.href = "home.html";
//   } else{
//       window.location.href = "index.html";
//   }
// });
