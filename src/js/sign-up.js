import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
const btnSignUp = document.querySelector('.header-user');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const registBtn = document.querySelector('.form__btn');
const signUp = document.querySelector('.form__btn-up');
const btnOut = document.querySelector('.form__btn-in');

btnSignUp.addEventListener('click', function () {
  formContainer.classList.add('is-open');
  //   document.body.style.overflow = 'hidden';
});

closeFormBtn.addEventListener('click', function () {
  formContainer.classList.remove('is-open');
  //   document.body.style.overflow = '';
});

// ========================================================================
