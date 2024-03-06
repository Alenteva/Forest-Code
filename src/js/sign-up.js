import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// import { firebaseConfig } from './config';
const firebaseConfig = {
  apiKey: 'AIzaSyD8UvisVnkCvMijmf6q4ZtLkQgC43vz2KM',
  authDomain: 'dookshelf-357a4.firebaseapp.com',
  projectId: 'dookshelf-357a4',
  storageBucket: 'dookshelf-357a4.appspot.com',
  messagingSenderId: '957443484270',
  appId: '1:957443484270:web:de06245395594e6cf9947f',
  measurementId: 'G-PGZE6HZC47',
};
initializeApp(firebaseConfig);
const auth = getAuth();

const formContainer = document.querySelector('.Form-window');
const closeFormBtn = document.querySelector('.Close-form-btn');
const headerSignUp = document.querySelector('.header-user');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernamelInput = document.getElementById('username');
const signInButton = document.querySelector('.quickstart-sign-in');
const signUpButton = document.querySelector('.quickstart-sign-up');
const headerNav = document.querySelector('.header-nav');

// ========================================================================

headerSignUp.addEventListener('click', function () {
  formContainer.classList.add('is-open');
  //   document.body.style.overflow = 'hidden';
});

closeFormBtn.addEventListener('click', function () {
  formContainer.classList.remove('is-open');
  //   document.body.style.overflow = '';
});

// ============================================
function handleSignUp() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const name = usernamelInput.value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Create user with email and pass.
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log(userCredential);
      const user = userCredential.user;
      user.displayName = name;
      formContainer.classList.remove('is-open');
      headerNav.style.display = 'block';
      headerSignUp.textContent = user.displayName;

      return iziToast.show({
        title: 'Ok',
        message: 'You have successfully registered!',
        color: 'blue',
        position: 'topCenter',
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  onAuthStateChanged(auth, user => {
    if (user) {
    }
    localStorage.setItem(
      'user-data',
      JSON.stringify({
        name: user.name,
        mail: user.email,
      })
    );
  });
}
formContainer.addEventListener('submit', function (event) {
  event.preventDefault(); // Це зупиняє стандартну дію форми (відправку)

  handleSignUp(); // Викликаємо функцію обробки реєстрації
});

// ======================================================================

// // Вхід користувача
// signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Успішний вхід користувача
//     const user = userCredential.user;
//     console.log('successfully:', user);
//   })
//   .catch(error => {
//     // Обробка помилок входу користувача
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     if (errorCode == 'auth/weak-password') {
//       alert('The password is too weak.');
//     } else {
//       alert(errorMessage);
//     }
//     console.log(error);
//   });
