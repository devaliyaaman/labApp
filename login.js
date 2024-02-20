const firebaseConfig = {
  apiKey: "AIzaSyDcj40SpzLf3S1L3-GlKGiSKhFMyuVrmmo",
  authDomain: "laboratoryapp-68984.firebaseapp.com",
  projectId: "laboratoryapp-68984",
  storageBucket: "laboratoryapp-68984.appspot.com",
  messagingSenderId: "1051165002396",
  appId: "1:1051165002396:web:f61cdf34aa9888e92b3b59",
  measurementId: "G-H4S5GTXJ24",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
render();

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}

// Create reCAPTCHA verifier
// const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//     'size': 'invisible',
// });

// Function to send OTP
// function sendOTP() {
//   const phoneNumber = document.getElementById("phone").value;
//   const appVerifier = recaptchaVerifier;

//   firebase
//     .auth()
//     .signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//       alert("OTP sent successfully!");
//     })
//     .catch((error) => {
//       console.error(error.message);
//       alert("Error sending OTP");
//     });
// }

// // Function to verify OTP
// function verifyOTP() {
//   const code = document.getElementById("otp").value;

//   if (window.confirmationResult) {
//     window.confirmationResult
//       .confirm(code)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         displayUserInfo(user);
//       })
//       .catch((error) => {
//         console.error(error.message);
//         alert("Error verifying OTP");
//       });
//   } else {
//     alert("No OTP confirmation result available");
//   }
// }

// // Function to display user info
// function displayUserInfo(user) {
//   const userInfoDiv = document.getElementById("userInfo");
//   userInfoDiv.innerHTML = `<p>User ID: ${user.uid}</p><p>Phone Number: ${user.phoneNumber}</p>`;
// }

// // // Import the functions you need from the SDKs you need
// // // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// // // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// // // firebase.auth().languageCode = 'it';

// // // Your web app's Firebase configuration

// // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // firebase.initializeApp(firebaseConfig);

// // // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('otpButton', {
// // //     'size': 'invisible',
// // //     'callback': (response) => {
// // //         // reCAPTCHA solved, allow signInWithPhoneNumber.
// // //         onSignInSubmit();
// // //     }
// // // });

// // // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// // // const recaptchaResponse = grecaptcha.getResponse('recaptcha-container');

// // let verificationId;
// // let confirmationResult;

// // function sendOTP() {
// //   const phoneNumber = document.getElementById("phone").value;
// //   // const appVerifier = window.recaptchaVerifier;
// //   const appVerifier = new firebase.auth.RecaptchaVerifier(
// //     "recaptcha-container"
// //   );

// //   firebase
// //     .auth()
// //     .signInWithPhoneNumber(phoneNumber, appVerifier)
// //     .then((confirmationResult) => {
// //       // SMS sent. Prompt user to type the code from the message, then sign the
// //       // user in with confirmationResult.confirm(code).
// //       window.confirmationResult = confirmationResult;
// //       // ...
// //     })
// //     .catch((error) => {
// //       // Error; SMS not sent
// //       // ...
// //       console.error(error);
// //     });

// //   // firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
// //   //     .then((confirmationResult) => {
// //   //         // SMS sent successfully
// //   //         // const confirmationCode = prompt('Enter OTP:');
// //   //         // return confirmationResult.confirm(confirmationCode);
// //   //         console.log(confirmationResult);
// //   //         verificationId = confirmationResult.verificationId;
// //   //         confirmationResult = result;
// //   //     })
// //   //     .then((result) => {
// //   //         // User signed in successfully
// //   //         console.log("result :" + result.user);
// //   //     })
// //   //     .catch((error) => {
// //   //         console.error(error.code, error.message);
// //   //     });
// // }

// // function verifyOTP() {
// //   const code = document.getElementById("otp").value;
// //   console.log(code);
// //   // const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);

// //   confirmationResult
// //     .confirm(code)
// //     .then((result) => {
// //       // User signed in successfully.
// //       const user = result.user;
// //       // ...
// //     })
// //     .catch((error) => {
// //       // User couldn't sign in (bad verification code?)
// //       // ...
// //     });
// //   // const confirmationResult = // Retrieve the confirmationResult from the previous step
// //   // confirmationResult.confirm(credential) // Use confirmationResult instead of confirmationResult.confirm
// //   //     .then((result) => {
// //   //         // User signed in successfully
// //   //         console.log(result.user);
// //   //     })
// //   //     .catch((error) => {
// //   //         console.error(error);
// //   //         window.recaptchaVerifier.render().then(function (widgetId) {
// //   //             grecaptcha.reset(widgetId);
// //   //         });
// //   //     });
// // }
